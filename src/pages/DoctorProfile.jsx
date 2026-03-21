import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { DOCTORS } from '../data/mockData';
import { Calendar, IndianRupee, Share2, Building2, PhoneCall, Video, User, Star, ChevronLeft, ChevronRight, Sun, Sunset, Moon } from 'lucide-react';

const DoctorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const doctor = DOCTORS.find(d => d.id === parseInt(id));

    const queryParams = new URLSearchParams(location.search);
    const initialView = queryParams.get('view') === 'booking' ? 'booking' : 'profile';
    const [activeView, setActiveView] = useState(initialView);

    useEffect(() => {
        const view = queryParams.get('view');
        if (view === 'booking' || view === 'profile') {
            setActiveView(view);
        }
    }, [location.search]);

    const [visitType, setVisitType] = useState('hospital');
    const [selectedLocation, setSelectedLocation] = useState(doctor?.locations[0] || '');
    const [selectedDate, setSelectedDate] = useState('09 Mar');
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Initial check
    if (!doctor) {
        return (
            <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text)' }}>Doctor not found</h1>
                <button className="btn btn-primary" onClick={() => navigate('/user/doctors')}>Back to Directory</button>
            </div>
        );
    }

    // Use effect to reset slot on date change
    React.useEffect(() => {
        setSelectedSlot(null);
    }, [selectedDate, selectedLocation, visitType]);

    const DATES = [
        { day: 'Mon', date: '09 Mar' },
        { day: 'Tue', date: '10 Mar' },
        { day: 'Wed', date: '11 Mar' },
        { day: 'Thu', date: '12 Mar' },
        { day: 'Fri', date: '13 Mar' },
        { day: 'Sat', date: '14 Mar' }
    ];

    const SLOTS = {
        morning: ['10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM'],
        afternoon: ['12:00 PM', '12:15 PM', '3:30 PM', '3:45 PM'],
        evening: ['4:00 PM']
    };

    const disabledSlots = ['10:00 AM', '12:15 PM'];

    const handleBookAppointment = () => {
        if (!selectedSlot) {
            alert('Please select a time slot to book an appointment.');
            return;
        }
        alert(`Appointment successfully booked for ${selectedDate} at ${selectedSlot} (${visitType} visit) with ${doctor.name}.`);
        navigate('/user/dashboard');
    };

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glows */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            {/* Header Profile Section */}
            <div className="card animate-slide-up" style={{ padding: '2.5rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={doctor.image} alt={doctor.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }} />

                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.25rem' }}>{doctor.name}</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{doctor.title} | {doctor.hospital}</p>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {doctor.specialties.map((spec, i) => (
                                    <span key={i} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500, border: '1px solid rgba(59,130,246,0.2)' }}>
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Share2 size={20} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
                                <Calendar size={24} color="var(--primary)" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{doctor.experience}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Experience</div>
                            </div>
                        </div>
                        <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
                                <IndianRupee size={24} color="var(--secondary)" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{doctor.fees}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Fees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', justifyContent: 'center' }}>
                <button 
                    style={{ background: 'transparent', border: 'none', padding: '0.5rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: activeView === 'profile' ? 'var(--text)' : 'var(--text-muted)', borderBottom: activeView === 'profile' ? '3px solid var(--primary)' : '3px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => { setActiveView('profile'); navigate(`/user/doctor/${doctor.id}?view=profile`, { replace: true }); }}
                >
                    Profile Details
                </button>
                <button 
                    style={{ background: 'transparent', border: 'none', padding: '0.5rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: activeView === 'booking' ? 'var(--text)' : 'var(--text-muted)', borderBottom: activeView === 'booking' ? '3px solid var(--primary)' : '3px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => { setActiveView('booking'); navigate(`/user/doctor/${doctor.id}?view=booking`, { replace: true }); }}
                >
                    Book Appointment
                </button>
            </div>

            {/* Content Layout */}
            <div>

                {/* Left Column: Details */}
                {activeView === 'profile' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card animate-slide-up delay-100" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                            <User size={20} color="var(--text-muted)" /> About
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{doctor.about}</p>
                    </div>

                    <div className="card animate-slide-up delay-200" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                            <Building2 size={20} color="var(--text-muted)" /> Education
                        </h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {doctor.education.map((edu, i) => (
                                <li key={i} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                                    {edu}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card animate-slide-up delay-300" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                            <Star size={20} color="var(--text-muted)" /> Awards & Accolades
                        </h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {doctor.awards.map((award, i) => (
                                <li key={i} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }}></div>
                                    {award}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                )}

                {/* Right Column: Booking */}
                {activeView === 'booking' && (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card animate-slide-up delay-100" style={{ padding: 0, border: '1px solid rgba(255,255,255,0.05)', background: 'var(--surface-light)' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h2 style={{ fontSize: '1.35rem', color: 'var(--text)', fontWeight: 600 }}>Schedule Appointment</h2>
                            <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: '#fecaca', color: '#991b1b', fontWeight: 600 }} onClick={handleBookAppointment}>Book Appointment</button>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            {/* Visit Type Toggle */}
                            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                                <button
                                    style={{ flex: 1, padding: '0.85rem', borderRadius: 'var(--radius)', backgroundColor: visitType === 'hospital' ? '#fecaca' : 'transparent', color: visitType === 'hospital' ? '#991b1b' : 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', border: 'none', transition: 'all 0.2s' }}
                                    onClick={() => setVisitType('hospital')}
                                >
                                    Book Hospital Visit
                                </button>
                                <button
                                    style={{ flex: 1, padding: '0.85rem', borderRadius: 'var(--radius)', backgroundColor: visitType === 'video' ? '#fecaca' : 'transparent', color: visitType === 'video' ? '#991b1b' : 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', border: 'none', transition: 'all 0.2s' }}
                                    onClick={() => setVisitType('video')}
                                >
                                    Book Video Consult
                                </button>
                            </div>

                            {/* Location Dropdown */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <select className="input" style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(30,41,59,0.5)', borderColor: 'rgba(255,255,255,0.1)' }} value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                                    {doctor.locations.map((loc, i) => (
                                        <option key={i} value={loc} style={{ background: '#0f172a' }}>{loc}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Date Selector */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <button style={{ background: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.25rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}><ChevronLeft size={16} /></button>
                                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>March 2026</span>
                                    <button style={{ background: 'none', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.25rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}><ChevronRight size={16} /></button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem', justifyContent: 'center' }}>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0 }}><ChevronLeft size={20} /></button>
                                {DATES.map((d, i) => (
                                    <button
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
                                <button style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', flexShrink: 0 }}><ChevronRight size={20} /></button>
                            </div>

                            {/* Time Slots */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                {/* Morning */}
                                <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Sun size={18} /> Morning</div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.morning.length} Slots</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                        {SLOTS.morning.map((time, i) => {
                                            const isDisabled = disabledSlots.includes(time);
                                            const isSelected = selectedSlot === time;
                                            return (
                                                <button
                                                    key={i}
                                                    disabled={isDisabled}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${isSelected ? '#fc8181' : isDisabled ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: isDisabled ? 'rgba(0,0,0,0.1)' : isSelected ? '#fee2e2' : 'transparent',
                                                        color: isDisabled ? 'rgba(255,255,255,0.15)' : isSelected ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Afternoon */}
                                <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Sunset size={18} /> Afternoon</div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.afternoon.length} Slots</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                        {SLOTS.afternoon.map((time, i) => {
                                            const isDisabled = disabledSlots.includes(time);
                                            const isSelected = selectedSlot === time;
                                            return (
                                                <button
                                                    key={i}
                                                    disabled={isDisabled}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${isSelected ? '#fc8181' : isDisabled ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: isDisabled ? 'rgba(0,0,0,0.1)' : isSelected ? '#fee2e2' : 'transparent',
                                                        color: isDisabled ? 'rgba(255,255,255,0.15)' : isSelected ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Evening */}
                                <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Moon size={18} /> Evening</div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}>{SLOTS.evening.length} Slot</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                        {SLOTS.evening.map((time, i) => {
                                            const isDisabled = disabledSlots.includes(time);
                                            const isSelected = selectedSlot === time;
                                            return (
                                                <button
                                                    key={i}
                                                    disabled={isDisabled}
                                                    style={{
                                                        padding: '0.5rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                        border: `1px solid ${isSelected ? '#fc8181' : isDisabled ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                                        backgroundColor: isDisabled ? 'rgba(0,0,0,0.1)' : isSelected ? '#fee2e2' : 'transparent',
                                                        color: isDisabled ? 'rgba(255,255,255,0.15)' : isSelected ? '#991b1b' : 'var(--text)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onClick={() => setSelectedSlot(time)}
                                                >
                                                    {time}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <button className="btn" style={{ width: '100%', padding: '1rem', backgroundColor: '#fecaca', color: '#991b1b', border: 'none', fontSize: '1.1rem', fontWeight: 700, borderRadius: '6px' }} onClick={handleBookAppointment}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    );
};

export default DoctorProfile;
