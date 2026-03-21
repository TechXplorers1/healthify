import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on landing page or user dashboard
  if (location.pathname === '/' || location.pathname === '/user/dashboard') {
    return null;
  }

  return (
    <div className="container" style={{ paddingTop: '6.5rem', paddingLeft: '1rem', paddingRight: '1rem', maxWidth: '1200px', margin: '0 auto', width: '100%', marginBottom: '-4.5rem', position: 'relative', zIndex: 40 }}>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          fontSize: '0.9rem',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(30,41,59,0.5)',
          color: 'var(--text)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(30,41,59,0.8)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30,41,59,0.5)'}
      >
        <ArrowLeft size={18} />
        Go Back
      </button>
    </div>
  );
};

export default BackButton;
