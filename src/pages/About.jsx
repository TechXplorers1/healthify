import React from 'react';
import { Info, HeartPulse, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glow */}
            <div style={{ position: 'absolute', top: '20%', right: '10%', width: '300px', height: '300px', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 7s infinite alternate' }}></div>

            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div className="pulse-secondary" style={{ display: 'inline-block', background: 'linear-gradient(135deg, var(--secondary), #34d399)', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)', marginBottom: '1.5rem' }}>
                    <Info size={36} color="white" strokeWidth={2} />
                </div>
                <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>About Healthify</h1>
                <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>We are dedicated to building a seamless ecosystem where world-class healthcare is easily accessible to everyone. Our platform bridges the gap between top medical facilities and patients seeking immediate, reliable care.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="card animate-slide-up delay-200" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
                    <HeartPulse size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem auto' }} />
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Our Vision</h3>
                    <p style={{ color: 'var(--text-muted)' }}>To be the most trusted and universally accessible medical network, revolutionizing how healthcare is delivered globally.</p>
                </div>
                <div className="card animate-slide-up delay-300" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
                    <ShieldCheck size={48} color="var(--secondary)" style={{ margin: '0 auto 1.5rem auto' }} />
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Our Commitment</h3>
                    <p style={{ color: 'var(--text-muted)' }}>We partner exclusively with verified, top-tier clinics and hospitals to ensure you always receive exceptional care.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
