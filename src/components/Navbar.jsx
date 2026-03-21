import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Activity, User, Stethoscope, LogIn, LogOut, PhoneCall } from 'lucide-react';

const Navbar = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = () => {
        setAuth({ isAuthenticated: false, role: null });
        navigate('/');
    };

    return (
        <nav style={{
            backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
            padding: scrolled ? '0.75rem 0' : '1.25rem 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 50,
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text)', textShadow: '0 0 20px rgba(59,130,246,0.3)' }}>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                        <Activity size={28} color="var(--primary)" strokeWidth={2.5} style={{ marginRight: '0.25rem' }} />
                        Healthify
                    </div>
                </Link>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    {/* Public Informational Links (Fortis inspired) */}
                    {auth?.isAuthenticated && auth.role === 'user' && (
                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1.5rem', marginRight: '0.25rem' }} className="nav-links-desktop">
                            <Link to="/careers" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Careers</Link>
                            <Link to="/about" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>About Us</Link>
                            <Link to="/contact" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Contact Us</Link>
                            <button
                                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.2s', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.35rem 0.75rem', borderRadius: '20px', cursor: 'pointer' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(16,185,129,0.3)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                                onClick={() => alert('Callback request submitted! We will call you shortly.')}
                            >
                                <PhoneCall size={14} /> Request a Callback
                            </button>
                        </div>
                    )}

                    {auth?.isAuthenticated ? (
                        <>
                            {auth.role === 'user' && (
                                <>
                                    <Link to="/user/dashboard" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Find Clinics</Link>
                                    <Link to="/user/profile" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><User size={18} /> Profile</Link>
                                </>
                            )}
                            {auth.role === 'doctor' && (
                                <Link to="/doctor/dashboard" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}><Stethoscope size={18} /> Dashboard</Link>
                            )}
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.95rem' }} onClick={handleSignOut}>
                                <LogOut size={16} /> Sign Out
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-primary pulse-primary" onClick={() => navigate('/auth')}>
                            <LogIn size={18} /> Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
