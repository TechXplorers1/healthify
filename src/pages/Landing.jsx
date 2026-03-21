import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

const Landing = ({ auth }) => {
    const navigate = useNavigate();

    return (
        <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6rem 1rem 2rem 1rem', position: 'relative', overflow: 'hidden' }}>

            {/* Background Decorators */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }}></div>

            <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                <div className="animate-slide-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
                    <div className="animate-float" style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', color: 'white', padding: '1.25rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(37, 99, 235, 0.4)' }}>
                        <HeartPulse size={56} strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="animate-slide-up delay-100" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1, textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    Find the Right Care,<br />
                    <span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Right Now.</span>
                </h1>

                <p className="animate-slide-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem auto', lineHeight: 1.6 }}>
                    Healthify connects patients with top-tier medical centers. Book instant appointments or elevate your healthcare facility's reach.
                </p>

                <div className="animate-slide-up delay-300" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    {auth?.isAuthenticated ? (
                        <button
                            className="btn btn-primary pulse-primary"
                            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                            onClick={() => navigate(auth.role === 'user' ? '/user/dashboard' : '/doctor/dashboard')}
                        >
                            Go to Dashboard <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary pulse-primary"
                            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
                            onClick={() => navigate('/auth')}
                        >
                            Get Started
                        </button>
                    )}
                </div>

                {/* Feature Highlights */}
                <div className="animate-slide-up delay-400" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <ShieldCheck size={24} color="var(--primary)" />
                        <span style={{ fontWeight: 500 }}>Verified Clinics</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <Clock size={24} color="var(--secondary)" />
                        <span style={{ fontWeight: 500 }}>Instant Booking</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <Star size={24} color="#f59e0b" />
                        <span style={{ fontWeight: 500 }}>Top Rated Doctors</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
