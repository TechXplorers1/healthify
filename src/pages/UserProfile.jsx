import React from 'react';
import { INITIAL_BOOKINGS } from '../data/mockData';
import { Calendar, MapPin, Activity } from 'lucide-react';

const UserProfile = () => {
    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', maxWidth: '900px', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glow */}
            <div style={{ position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className="pulse-primary" style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)' }}>
                    <Activity size={36} color="white" strokeWidth={2} />
                </div>
                <div>
                    <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>My Profile</h1>
                    <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Manage your personal details and booking history.</p>
                </div>
            </div>

            <div className="animate-slide-up delay-200" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', fontWeight: 600 }}>Booking History</h2>

                {INITIAL_BOOKINGS.length === 0 ? (
                    <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No bookings found.</p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {INITIAL_BOOKINGS.map((booking, index) => (
                            <div key={booking.id} className="card animate-slide-up" style={{ animationDelay: `${(index + 3) * 50}ms`, padding: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.25rem' }}>{booking.clinicName}</h3>
                                    <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>{booking.doctorName}</p>
                                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            <Calendar size={16} /> <span>Date: <strong style={{ color: 'var(--text)' }}>{booking.date}</strong></span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            <MapPin size={16} /> <span>{booking.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{
                                        padding: '0.4rem 1rem',
                                        borderRadius: '999px',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        backgroundColor: booking.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                                        color: booking.status === 'Upcoming' ? '#60a5fa' : '#34d399',
                                        border: `1px solid ${booking.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                                        boxShadow: booking.status === 'Upcoming' ? '0 0 10px rgba(59,130,246,0.1)' : '0 0 10px rgba(16,185,129,0.1)'
                                    }}>
                                        {booking.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
