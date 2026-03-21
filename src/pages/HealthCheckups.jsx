import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HealthCheckups = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');

    const CATEGORIES = [
        { name: 'Recommended', price: 3000 },
        { name: 'Cancer Screening', price: 799 },
        { name: 'Diabetes', price: 999 },
        { name: 'General Health', price: 786 },
        { name: 'Heart', price: 300 },
        { name: 'Senior Citizen', price: 3000 },
        { name: 'Special', price: 2 },
        { name: 'Women', price: 1800 },
    ];

    const HOSPITALS = [
        'Fortis Memorial Research Institute, Gurgaon',
        'Fortis Escorts Heart Institute, Okhla',
        'Fortis Hospital, Shalimar Bagh',
        'Fortis Hospital, Noida',
        'Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj'
    ];

    const filteredCategories = CATEGORIES.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container" style={{ padding: '6rem 1rem 3rem 1rem', minHeight: '100vh', position: 'relative' }}>
            {/* Ambient Background glows */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -1, animation: 'float 8s infinite alternate' }}></div>

            {/* Main Search Bar */}
            <div className="card animate-slide-up" style={{ padding: '0.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--surface)' }}>
                <input
                    type="text"
                    placeholder="Search By Packages"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ flex: 1, padding: '1rem', background: 'transparent', border: 'none', color: 'var(--text)', fontSize: '1.05rem', outline: 'none' }}
                />
                <button style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', color: 'var(--text)' }}>
                    <Search size={22} />
                </button>
            </div>

            {/* Find Checkup By Hospital */}
            <div className="animate-slide-up delay-100" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text)' }}>Find Checkup By Hospital</h2>

                <div style={{ display: 'flex', gap: '1rem', flex: 1, minWidth: '300px' }}>
                    <select
                        className="input"
                        value={selectedHospital}
                        onChange={(e) => setSelectedHospital(e.target.value)}
                        style={{ flex: 1, padding: '0.85rem', backgroundColor: 'var(--surface)', borderColor: 'rgba(255,255,255,0.1)', fontSize: '1rem' }}
                    >
                        <option value="" disabled>Filter by Hospital</option>
                        {HOSPITALS.map((hospital, index) => (
                            <option key={index} value={hospital} style={{ background: '#0f172a' }}>{hospital}</option>
                        ))}
                    </select>

                    <button className="btn" style={{ padding: '0.85rem 2rem', backgroundColor: '#fecaca', color: '#991b1b', border: 'none', fontWeight: 600, fontSize: '1rem' }}>
                        Find Checkup
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="animate-slide-up delay-200">
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>Categories</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {filteredCategories.map((cat, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--surface-light)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '2.5rem 1.5rem',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            {/* Decorative background curve effect simulated with a glowing blob */}
                            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(244, 114, 182, 0.05)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', background: 'rgba(96, 165, 250, 0.05)', borderRadius: '50%', filter: 'blur(30px)' }}></div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>{cat.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', position: 'relative', zIndex: 1 }}>Starting from ₹ {cat.price}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HealthCheckups;
