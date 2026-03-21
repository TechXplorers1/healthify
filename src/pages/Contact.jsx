import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glow */}
            <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: '350px', height: '350px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="animate-slide-up" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Contact Us</h1>
                <p className="animate-slide-up delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Have a question, feedback, or need support? We're here to help. Reach out to the Healthify team today.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem', alignItems: 'start' }}>
                <div className="card animate-slide-up delay-200" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
                            <Mail size={24} color="var(--primary)" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Support</h3>
                            <p style={{ color: 'var(--text-muted)' }}>support@healthify.com</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
                            <Phone size={24} color="var(--secondary)" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h3>
                            <p style={{ color: 'var(--text-muted)' }}>1-800-HEAL-NOW</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
                            <MapPin size={24} color="#f59e0b" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Office</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>123 Corporate BLVD,<br />Medical District, NY 10001</p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slide-up delay-300" style={{ padding: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send us a message</h2>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>First Name</label>
                                <input type="text" className="input" placeholder="John" required />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Last Name</label>
                                <input type="text" className="input" placeholder="Doe" required />
                            </div>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email Address</label>
                            <input type="email" className="input" placeholder="john@example.com" required />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea className="input" rows="5" placeholder="How can we help you?" style={{ resize: 'vertical' }} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
