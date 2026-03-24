import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOCTORS } from '../data/mockData';
import { Calendar, MapPin, IndianRupee, Search, Filter } from 'lucide-react';

const FindDoctors = () => {
    const navigate = useNavigate();
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

    const filteredDoctors = DOCTORS.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
            doc.hospital.toLowerCase().includes(searchQuery.toLowerCase());
            
        if (!matchesSearch) return false;

        if (selectedBodyPart === 'All') return true;

        const activeFilter = BODY_PART_FILTERS.find(f => f.label === selectedBodyPart);
        if (!activeFilter) return true;

        const doctorKeywords = [doc.name, ...doc.specialties, doc.about || ''].join(' ').toLowerCase();
        
        return activeFilter.keywords.some(kw => doctorKeywords.includes(kw));
    });

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glo */}
            <div style={{ position: 'absolute', top: '15%', left: '5%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Find a Doctor</h1>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Search our network of verified specialists and physicians.</p>
                </div>

                <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '450px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className="input"
                            placeholder="Search doctors, specialties..."
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
