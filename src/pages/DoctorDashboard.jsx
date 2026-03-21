import React, { useState } from 'react';
import { INITIAL_DOCTOR_REQUESTS } from '../data/mockData';
import { Check, X, Calendar, Plus, Activity } from 'lucide-react';

const DoctorDashboard = () => {
    const [requests, setRequests] = useState(INITIAL_DOCTOR_REQUESTS);
    const [showAddClinic, setShowAddClinic] = useState(false);

    const handleAction = (id, action) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: action } : req
        ));
    };

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glow */}
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1, animation: 'float 6s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Activity size={32} color="var(--secondary)" /> Dashboard
                    </h1>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Manage your clinic and incoming appointment requests.</p>
                </div>
                <button className="btn btn-secondary animate-slide-up delay-200 pulse-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }} onClick={() => setShowAddClinic(true)}>
                    <Plus size={20} /> Add Clinic / Hospital
                </button>
            </div>

            <div className="animate-slide-up delay-300">
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', fontWeight: 600 }}>Appointment Requests</h2>

                {requests.length === 0 ? (
                    <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No pending requests at the moment.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))' }}>
                        {requests.map(req => (
                            <div key={req.id} className="card" style={{ padding: '1.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.25rem' }}>{req.patientName}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            <Calendar size={16} /> <span>Requested Date: <strong style={{ color: 'var(--text)' }}>{req.date}</strong></span>
                                        </div>
                                    </div>
                                    <span style={{
                                        padding: '0.35rem 0.85rem',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        height: 'fit-content',
                                        backgroundColor: req.status === 'Pending' ? 'rgba(245, 158, 11, 0.15)' : req.status === 'Accepted' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                                        color: req.status === 'Pending' ? '#fbbf24' : req.status === 'Accepted' ? '#34d399' : '#f87171',
                                        border: `1px solid ${req.status === 'Pending' ? 'rgba(245, 158, 11, 0.3)' : req.status === 'Accepted' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                                    }}>
                                        {req.status}
                                    </span>
                                </div>

                                {req.status === 'Pending' && (
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                        <button
                                            className="btn"
                                            style={{ flex: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.4)', transition: 'all 0.3s', backdropFilter: 'blur(4px)' }}
                                            onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--secondary)'; e.target.style.color = 'white'; }}
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)'; e.target.style.color = '#34d399'; }}
                                            onClick={() => handleAction(req.id, 'Accepted')}
                                        >
                                            <Check size={18} /> Accept
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.4)', transition: 'all 0.3s', backdropFilter: 'blur(4px)' }}
                                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#ef4444'; e.target.style.color = 'white'; }}
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'; e.target.style.color = '#f87171'; }}
                                            onClick={() => handleAction(req.id, 'Declined')}
                                        >
                                            <X size={18} /> Decline
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Clinic Modal */}
            {showAddClinic && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                    <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem', fontWeight: 700 }}>Add New Clinic</h2>

                        <form onSubmit={(e) => { e.preventDefault(); alert('Clinic added successfully!'); setShowAddClinic(false); }}>
                            <div style={{ marginBottom: '1.25rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Clinic Name</label>
                                <input type="text" className="input" required placeholder="e.g. City Care Center" />
                            </div>
                            <div style={{ marginBottom: '1.25rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Location</label>
                                <input type="text" className="input" required placeholder="Full Address" />
                            </div>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Token Price ($)</label>
                                <input type="number" className="input" required min="1" placeholder="e.g. 50" />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="button" className="btn btn-outline" style={{ flex: 1, padding: '0.85rem' }} onClick={() => setShowAddClinic(false)}>Cancel</button>
                                <button type="submit" className="btn btn-secondary" style={{ flex: 1, padding: '0.85rem' }}>Add Clinic</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDashboard;
