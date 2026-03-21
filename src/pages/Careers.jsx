import React from 'react';
import { Briefcase, Building2, Link as LinkIcon } from 'lucide-react';

const Careers = () => {
    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glow */}
            <div style={{ position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <div className="pulse-primary" style={{ display: 'inline-block', background: 'linear-gradient(135deg, var(--primary), #60a5fa)', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)', marginBottom: '1.5rem' }}>
                    <Briefcase size={36} color="white" strokeWidth={2} />
                </div>
                <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Careers at Healthify</h1>
                <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Join us in our mission to connect patients with top-tier medical care. Explore current opportunities and become part of something impactful.</p>
            </div>

            <div className="card animate-slide-up delay-200" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'rgba(30, 41, 59, 0.6)', backdropFilter: 'blur(12px)' }}>
                <Building2 size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem auto', opacity: 0.8 }} />
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>No open positions right now</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We are currently not actively hiring, but we are always on the lookout for great talent. Send us your resume to be considered for future roles.</p>
                <button className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}>
                    <LinkIcon size={18} /> Submit Application
                </button>
            </div>
        </div>
    );
};

export default Careers;
