import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CLINICS } from '../data/mockData';
import { MapPin, Phone, DollarSign, Star, Calendar, Search, Building2, Filter } from 'lucide-react';

const FindHospitals = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [selectedBodyPart, setSelectedBodyPart] = useState('All');
    const [showBodyPartPopup, setShowBodyPartPopup] = useState(false);

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

    const LOCATION_FILTERS = [
        { label: 'All', keywords: [] },
        { label: 'India (All)', keywords: ['india', 'gurugram', 'noida', 'delhi', 'new delhi'] },
        { label: 'USA (All)', keywords: ['usa', 'us', 'san francisco', 'los angeles', 'seattle', 'ca', 'wa'] },
        { label: 'New Delhi, India', keywords: ['new delhi', 'delhi'] },
        { label: 'Gurugram, India', keywords: ['gurugram', 'gurgaon'] },
        { label: 'Noida, India', keywords: ['noida'] },
        { label: 'San Francisco, CA', keywords: ['san francisco', 'sf', 'ca'] },
        { label: 'Los Angeles, CA', keywords: ['los angeles', 'la', 'ca'] },
        { label: 'Seattle, WA', keywords: ['seattle', 'wa'] },
    ];

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const specialtyParam = params.get('specialty');
        if (specialtyParam) {
            setSelectedBodyPart(specialtyParam);
        }
    }, [location.search]);

    const filteredClinics = CLINICS.filter(clinic => {
        const matchesSearch = clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            clinic.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            clinic.specialties?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
        
        if (!matchesSearch) return false;

        // location check
        let matchesLoc = true;
        if (selectedLocation !== 'All') {
            const locFilter = LOCATION_FILTERS.find(f => f.label === selectedLocation);
            if (locFilter) {
                matchesLoc = locFilter.keywords.some(kw => clinic.location.toLowerCase().includes(kw));
            }
        }

        // body part check
        let matchesBodyPart = true;
        if (selectedBodyPart !== 'All') {
            const bodyFilter = BODY_PART_FILTERS.find(f => f.label === selectedBodyPart);
            if (bodyFilter) {
                const clinicKeywords = [clinic.name, ...(clinic.specialties || []), clinic.type].join(' ').toLowerCase();
                matchesBodyPart = bodyFilter.keywords.some(kw => clinicKeywords.includes(kw));
            }
        }

        return matchesLoc && matchesBodyPart;
    });

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glo */}
            <div style={{ position: 'absolute', top: '15%', left: '5%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Find Hospitals & Clinics</h1>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Browse and book with our trusted medical facilities.</p>
                </div>

                <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '550px' }}>
                    <button 
                        className="btn btn-outline" 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1.25rem', borderRadius: '1rem', backgroundColor: selectedLocation !== 'All' ? 'rgba(59, 130, 246, 0.1)' : 'transparent', border: `1px solid ${selectedLocation !== 'All' ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`, color: selectedLocation !== 'All' ? 'var(--primary)' : 'var(--text)', whiteSpace: 'nowrap' }}
                        onClick={() => setShowLocationPopup(true)}
                    >
                        <MapPin size={20} />
                        Location
                    </button>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className="input"
                            placeholder="Search hospitals, specialties..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '1rem', paddingBottom: '1rem', fontSize: '1.05rem', backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '1rem', width: '100%' }}
                        />
                    </div>
                    <button 
                        className="btn btn-outline" 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1.25rem', borderRadius: '1rem', backgroundColor: selectedBodyPart !== 'All' ? 'rgba(59, 130, 246, 0.1)' : 'transparent', border: `1px solid ${selectedBodyPart !== 'All' ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`, color: selectedBodyPart !== 'All' ? 'var(--primary)' : 'var(--text)' }}
                        onClick={() => setShowBodyPartPopup(true)}
                    >
                        <Filter size={20} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Body Part Popup Modal */}
            {showBodyPartPopup && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                    <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '600px', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)' }}>
                                <Filter size={24} color="var(--primary)" /> Filter by Body Part
                            </h2>
                            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '2rem', lineHeight: 1 }} onClick={() => setShowBodyPartPopup(false)}>&times;</button>
                        </div>
                        
                        <div className="custom-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem', maxHeight: '55vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
                            {BODY_PART_FILTERS.map((filter, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedBodyPart(filter.label);
                                        setShowBodyPartPopup(false);
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

            {/* Location Popup Modal */}
            {showLocationPopup && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                    <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '600px', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)' }}>
                                <MapPin size={24} color="var(--primary)" /> Filter by Location
                            </h2>
                            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '2rem', lineHeight: 1 }} onClick={() => setShowLocationPopup(false)}>&times;</button>
                        </div>
                        
                        <div className="custom-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem', maxHeight: '55vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
                            {LOCATION_FILTERS.map((filter, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedLocation(filter.label);
                                        setShowLocationPopup(false);
                                    }}
                                    style={{
                                        padding: '1rem 0.5rem',
                                        borderRadius: '12px',
                                        border: `1px solid ${selectedLocation === filter.label ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}`,
                                        backgroundColor: selectedLocation === filter.label ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30,41,59,0.5)',
                                        color: selectedLocation === filter.label ? 'var(--primary)' : 'var(--text)',
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
                                        if (selectedLocation !== filter.label) {
                                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedLocation !== filter.label) {
                                            e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
                                        }
                                    }}
                                >
                                    {filter.label}
                                    {selectedLocation === filter.label && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>}
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
                                    onClick={() => navigate('/user/dashboard?scrollTo=clinics')}
                                >
                                    <Calendar size={20} /> View in Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block' }}>
                            <MapPin size={48} color="var(--text-muted)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <p style={{ fontSize: '1.1rem' }}>No hospitals found in "{selectedLocation}".</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindHospitals;
