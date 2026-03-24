import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLINICS, PATIENT_STORIES } from '../data/mockData';
import { MapPin, Phone, DollarSign, Star, Calendar, Search, Building2, Stethoscope, HeartPulse, ArrowRight, Quote, ChevronLeft, ChevronRight, Sun, Sunset, Moon, Filter } from 'lucide-react';

const UserDashboard = () => {
    const navigate = useNavigate();
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [selectedDate, setSelectedDate] = useState('09 Mar');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBodyPart, setSelectedBodyPart] = useState('All');
    const [showFilterPopup, setShowFilterPopup] = useState(false);

    const BODY_PART_FILTERS = [
        { label: 'All', keywords: [] },
        { label: 'Brain & Nerves', keywords: ['neuro', 'brain', 'nerve'] },
        { label: 'Eyes', keywords: ['ophthalmolog', 'eye', 'vision'] },
        { label: 'Ears, Nose & Throat', keywords: ['ent', 'otolaryngolog', 'ear', 'nose', 'throat'] },
        { label: 'Teeth & Mouth', keywords: ['dent', 'teeth', 'mouth', 'orthodont'] },
        { label: 'Heart', keywords: ['cardiac', 'cardiology', 'ctvs', 'heart'] },
        { label: 'Lungs', keywords: ['pulmono', 'chest', 'lung', 'respirat'] },
        { label: 'Stomach & Digestion', keywords: ['gastro', 'liver', 'hepatobiliary', 'stomach', 'digestion'] },
        { label: 'Urinary & Kidneys', keywords: ['urolo', 'nephro', 'kidney', 'urina'] },
        { label: 'Hair & Skin', keywords: ['derma', 'skin', 'hair', 'tricholog'] },
        { label: 'Diabetes & Hormones', keywords: ['diabet', 'endocrin', 'hormone'] },
        { label: 'Cancer', keywords: ['oncol', 'cancer', 'tumor'] },
        { label: 'General Medicine', keywords: ['general', 'internal', 'physician'] },
    ];

    // Reset slot when clinic or date changes
    React.useEffect(() => {
        setSelectedSlot(null);
    }, [selectedClinic, selectedDate]);

    const DATES = [
        { day: 'Mon', date: '09 Mar' },
        { day: 'Tue', date: '10 Mar' },
        { day: 'Wed', date: '11 Mar' },
        { day: 'Thu', date: '12 Mar' },
        { day: 'Fri', date: '13 Mar' },
        { day: 'Sat', date: '14 Mar' }
    ];

    const SLOTS = {
        morning: ['10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:30 AM'],
        afternoon: ['12:00 PM', '12:15 PM', '3:30 PM', '3:45 PM'],
        evening: ['4:00 PM']
    };

    const disabledSlots = ['10:00 AM', '12:15 PM'];

    const handleBook = (e) => {
        e.preventDefault();
        if (!selectedSlot) {
            alert('Please select a time slot to book an appointment.');
            return;
        }

        alert(`Appointment booked successfully for ${selectedClinic.name} on ${selectedDate} at ${selectedSlot}!`);
        setSelectedClinic(null);
        setSelectedSlot(null);
    };

    const filteredClinics = CLINICS.filter(clinic => {
        const matchesSearch = clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            clinic.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            clinic.type.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesSearch) return false;

        if (selectedBodyPart === 'All') return true;

        const activeFilter = BODY_PART_FILTERS.find(f => f.label === selectedBodyPart);
        if (!activeFilter) return true;

        const clinicKeywords = [clinic.name, ...(clinic.specialties || []), clinic.type].join(' ').toLowerCase();
        
        return activeFilter.keywords.some(kw => clinicKeywords.includes(kw));
    });

    const scrollToClinics = () => {
        document.getElementById('clinics-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glows */}
            <div style={{ position: 'absolute', top: '5%', left: '5%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>
            <div style={{ position: 'absolute', top: '30%', right: '5%', width: '300px', height: '300px', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1, animation: 'float 6s infinite alternate-reverse' }}></div>

            <div style={{ marginBottom: '4rem' }}>
                <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800, color: 'var(--text)' }}>Welcome to Healthify</h1>
                <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', marginBottom: '2.5rem' }}>Your centralized health hub. Choose a service below to get started or browse our network of top-rated clinics.</p>

                {/* Quick Actions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                    {/* Action 1 */}
                    <div className="card animate-slide-up delay-200" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid rgba(59, 130, 246, 0.2)', background: 'linear-gradient(to bottom right, rgba(30,41,59,0.9), rgba(15,23,42,0.95))' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(59,130,246,0.15)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'; }} onClick={() => navigate('/user/doctors')}>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Stethoscope size={32} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 700 }}>Find a Doctor</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>Search our network of verified specialists and physicians tailored to your needs.</p>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                            Search Directory <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </div>
                    </div>

                    {/* Action 2 */}
                    <div className="card animate-slide-up delay-300" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid rgba(16, 185, 129, 0.2)', background: 'linear-gradient(to bottom right, rgba(30,41,59,0.9), rgba(15,23,42,0.95))' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(16,185,129,0.15)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)'; }} onClick={() => navigate('/user/hospitals')}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Calendar size={32} color="var(--secondary)" />
                        </div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 700 }}>Find Hospitals / Clinics</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>Schedule a visit with your preferred clinic instantly without waiting in queues.</p>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.95rem' }}>
                            Book Now <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </div>
                    </div>

                    {/* Action 3 */}
                    <div className="card animate-slide-up delay-400" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid rgba(245, 158, 11, 0.2)', background: 'linear-gradient(to bottom right, rgba(30,41,59,0.9), rgba(15,23,42,0.95))' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(245,158,11,0.15)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.2)'; }} onClick={() => navigate('/user/checkups')}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <HeartPulse size={32} color="#f59e0b" />
                        </div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 700 }}>Get Health Checkup</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>Explore holistic wellness packages tailored for preventive care and testing.</p>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', fontWeight: 600, fontSize: '0.95rem' }}>
                            View Packages <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div id="clinics-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem' }}>
                <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <div className="pulse-primary" style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)' }}>
                            <Building2 size={24} color="white" strokeWidth={2} />
                        </div>
                        <div>
                            <h2 className="animate-slide-up" style={{ fontSize: '2.25rem', marginBottom: '0.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Nearby Hospitals / Clinics</h2>
                            <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Browse and book with our trusted medical facilities.</p>
                        </div>
                    </div>

                    <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '450px' }}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                className="input"
                                placeholder="Search clinics or locations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '1rem', paddingBottom: '1rem', fontSize: '1.05rem', backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '1rem', width: '100%' }}
                            />
                        </div>
                        <button 
                            className="btn btn-outline" 
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1.25rem', borderRadius: '1rem', backgroundColor: selectedBodyPart !== 'All' ? 'rgba(59, 130, 246, 0.1)' : 'transparent', border: `1px solid ${selectedBodyPart !== 'All' ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`, color: selectedBodyPart !== 'All' ? 'var(--primary)' : 'var(--text)' }}
                            onClick={() => setShowFilterPopup(true)}
                        >
                            <Filter size={20} />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Filter Popup Modal */}
                {showFilterPopup && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                        <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '600px', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)' }}>
                                    <Filter size={24} color="var(--primary)" /> Filter by Body Part
                                </h2>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '2rem', lineHeight: 1 }} onClick={() => setShowFilterPopup(false)}>&times;</button>
                            </div>
                            
                            <div className="custom-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem', maxHeight: '55vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                {BODY_PART_FILTERS.map((filter, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedBodyPart(filter.label);
                                            setShowFilterPopup(false);
                                        }}
                                        style={{
                                            padding: '1rem 0.5rem',
                                            borderRadius: '12px',
                                            border: `1px solid ${selectedBodyPart === filter.label ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}`,
                                            backgroundColor: selectedBodyPart === filter.label ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30,41,59,0.5)',
                                            color: selectedBodyPart === filter.label ? 'var(--primary)' : 'var(--text)',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            transition: 'all 0.2s',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            minHeight: '80px'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedBodyPart !== filter.label) {
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedBodyPart !== filter.label) {
                                                e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
                                            }
                                        }}
                                    >
                                        {filter.label}
                                        {selectedBodyPart === filter.label && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
                    {filteredClinics.length > 0 ? filteredClinics.map((clinic, index) => (
                        <div key={clinic.id} className="card animate-slide-up" style={{ animationDelay: `${(index + 2) * 50}ms`, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 100%)', zIndex: 1 }}></div>
                                <img src={clinic.image} alt={clinic.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />

                                <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(245, 158, 11, 0.9)', color: '#fff', padding: '0.35rem 0.75rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 700, backdropFilter: 'blur(4px)' }}>
                                        <Star size={16} fill="currentColor" style={{ marginRight: '6px' }} /> {clinic.rating}
                                    </div>
                                    <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.9)', color: 'white', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                                        {clinic.type}
                                    </span>
                                </div>
                            </div>

                            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text)' }}>{clinic.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.25rem' }}>{clinic.doctorName}</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--text-muted)' }} />
                                        <span style={{ lineHeight: 1.4 }}>{clinic.location}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Phone size={18} style={{ color: 'var(--text-muted)' }} />
                                        <span>{clinic.contact}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text)', fontWeight: 600, marginTop: '0.25rem' }}>
                                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.4rem', borderRadius: '8px' }}>
                                            <DollarSign size={18} color="var(--primary)" />
                                        </div>
                                        <span style={{ fontSize: '1.1rem' }}>Token Price: <span style={{ color: 'var(--primary)' }}>${clinic.tokenPrice}</span></span>
                                    </div>
                                </div>

                                <div style={{ marginTop: 'auto' }}>
                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', boxShadow: '0 8px 16px rgba(37, 99, 235, 0.2)' }}
                                        onClick={() => setSelectedClinic(clinic)}
                                    >
                                        <Calendar size={20} /> Select & Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block' }}>
                                <Search size={48} color="var(--text-muted)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontSize: '1.1rem' }}>No clinics found matching "<span style={{ color: 'var(--text)' }}>{searchQuery}</span>".</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Patient Stories Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', paddingBottom: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="animate-slide-up" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>Our Patient's Stories</h2>
                    <div className="animate-slide-up delay-100" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', margin: '0 auto', borderRadius: '2px' }}></div>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>Real experiences from people who trusted us with their healthcare journey.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {PATIENT_STORIES.map((story, index) => (
                        <div key={story.id} className="card animate-slide-up" style={{ animationDelay: `${(index + 2) * 100}ms`, padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'rgba(59, 130, 246, 0.1)' }} />

                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                                {[...Array(story.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>

                            <p style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1 }}>
                                "{story.story}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                                <img src={story.image} alt={story.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.15rem' }}>{story.name}</h4>
                                    <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>{story.treatment}</p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>at {story.hospital}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {selectedClinic && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                    <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.75rem', fontWeight: 700 }}>Book Appointment</h2>
                        <div style={{ padding: '1rem', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: 'var(--radius)', marginBottom: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                            <p style={{ fontWeight: 600, color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{selectedClinic.name}</p>
                            <p style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>with {selectedClinic.doctorName}</p>
                        </div>

                        <form onSubmit={handleBook}>
                            <div style={{ marginBottom: '1.5rem', maxHeight: '45vh', overflowY: 'auto', paddingRight: '0.5rem' }} className="custom-scrollbar">
                                {/* Date Selector */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <button type="button" style={{ background: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.25rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}><ChevronLeft size={16} /></button>
                                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>March 2026</span>
                                        <button type="button" style={{ background: 'none', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.25rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}><ChevronRight size={16} /></button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem', justifyContent: 'center' }}>
                                    <button type="button" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0 }}><ChevronLeft size={20} /></button>
                                    {DATES.map((d, i) => (
                                        <button
                                            type="button"
                                            key={i}
                                            style={{
                                                flexShrink: 0,
                                                padding: '0.5rem 1rem',
                                                borderRadius: '6px',
                                                border: `1px solid ${selectedDate === d.date ? '#f87171' : 'rgba(255,255,255,0.1)'}`,
                                                backgroundColor: selectedDate === d.date ? '#fecaca' : 'transparent',
                                                color: selectedDate === d.date ? '#991b1b' : 'var(--text-muted)',
                                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
                                                cursor: 'pointer', transition: 'all 0.2s',
                                                minWidth: '60px'
                                            }}
                                            onClick={() => setSelectedDate(d.date)}
                                        >
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{d.day}</span>
                                            <span style={{ fontSize: '0.85rem' }}>{d.date}</span>
                                        </button>
                                    ))}
                                    <button type="button" style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', flexShrink: 0 }}><ChevronRight size={20} /></button>
                                </div>

                                {/* Time Slots grids */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {/* Morning */}
                                    <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Sun size={18} /> Morning</div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.morning.length} Slots</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                            {SLOTS.morning.map((time, i) => (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    disabled={disabledSlots.includes(time)}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: disabledSlots.includes(time) ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${selectedSlot === time ? '#fc8181' : disabledSlots.includes(time) ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: disabledSlots.includes(time) ? 'rgba(0,0,0,0.1)' : selectedSlot === time ? '#fee2e2' : 'transparent',
                                                        color: disabledSlots.includes(time) ? 'rgba(255,255,255,0.15)' : selectedSlot === time ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Afternoon */}
                                    <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Sunset size={18} /> Afternoon</div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.afternoon.length} Slots</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                            {SLOTS.afternoon.map((time, i) => (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    disabled={disabledSlots.includes(time)}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: disabledSlots.includes(time) ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${selectedSlot === time ? '#fc8181' : disabledSlots.includes(time) ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: disabledSlots.includes(time) ? 'rgba(0,0,0,0.1)' : selectedSlot === time ? '#fee2e2' : 'transparent',
                                                        color: disabledSlots.includes(time) ? 'rgba(255,255,255,0.15)' : selectedSlot === time ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Evening */}
                                    <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Moon size={18} /> Evening</div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.evening.length} Slots</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                            {SLOTS.evening.map((time, i) => (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    disabled={disabledSlots.includes(time)}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: disabledSlots.includes(time) ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${selectedSlot === time ? '#fc8181' : disabledSlots.includes(time) ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: disabledSlots.includes(time) ? 'rgba(0,0,0,0.1)' : selectedSlot === time ? '#fee2e2' : 'transparent',
                                                        color: disabledSlots.includes(time) ? 'rgba(255,255,255,0.15)' : selectedSlot === time ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="button" className="btn btn-outline" style={{ flex: 1, padding: '0.85rem' }} onClick={() => setSelectedClinic(null)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '0.85rem' }}>Confirm Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
