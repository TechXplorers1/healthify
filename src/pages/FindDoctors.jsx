import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOCTORS } from '../data/mockData';
import { Calendar, MapPin, IndianRupee, Search } from 'lucide-react';

const FindDoctors = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDoctors = DOCTORS.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        doc.hospital.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glo */}
            <div style={{ position: 'absolute', top: '15%', left: '5%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Find a Doctor</h1>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Search our network of verified specialists and physicians.</p>
                </div>

                <div className="animate-slide-up delay-200" style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
                    <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        className="input"
                        placeholder="Search doctors, specialties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '1rem', paddingBottom: '1rem', fontSize: '1.05rem', backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '1rem' }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {filteredDoctors.length > 0 ? filteredDoctors.map((doctor, index) => (
                    <div key={doctor.id} className="card animate-slide-up" style={{ animationDelay: `${(index + 2) * 50}ms`, padding: 0, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                        <div style={{ padding: '1.5rem', flexGrow: 1 }}>
                            <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                <img src={doctor.image} alt={doctor.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.1)' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>{doctor.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{doctor.title}</p>
                                    <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 500 }}>{doctor.hospital}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {doctor.specialties.map((spec, i) => (
                                    <span key={i} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 500, border: '1px solid rgba(59,130,246,0.2)' }}>
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                        <Calendar size={18} color="var(--text-muted)" /> {doctor.experience}
                                    </div>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '1.75rem' }}>Experience</span>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                        <IndianRupee size={18} color="var(--text-muted)" /> {doctor.fees}
                                    </div>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '1.75rem' }}>Fees</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    {doctor.locations.map((loc, i) => (
                                        <div key={i} style={{ marginBottom: i < doctor.locations.length - 1 ? '0.25rem' : 0 }}>{loc}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <button className="btn" style={{ flex: 1, borderRadius: 0, backgroundColor: 'transparent', color: 'var(--text)', padding: '1.25rem', fontSize: '0.95rem', fontWeight: 600, borderRight: '1px solid rgba(255,255,255,0.05)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.02)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={() => navigate(`/user/doctor/${doctor.id}?view=profile`)}>
                                View Full Profile
                            </button>
                            <button className="btn" style={{ flex: 1, borderRadius: 0, backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', padding: '1.25rem', fontSize: '0.95rem', fontWeight: 600, transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.2)'; e.target.style.color = '#fcd34d'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(245, 158, 11, 0.1)'; e.target.style.color = '#fbbf24'; }} onClick={() => navigate(`/user/doctor/${doctor.id}?view=booking`)}>
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                )) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block' }}>
                            <Search size={48} color="var(--text-muted)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <p style={{ fontSize: '1.1rem' }}>No doctors found matching "{searchQuery}".</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindDoctors;
