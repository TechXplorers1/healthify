import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Stethoscope, HeartPulse } from 'lucide-react';

const Auth = ({ setAuth }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user'); // 'user' or 'doctor'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Simulate successful sign up -> switch to login
      alert('Sign up successful! Please log in.');
      setIsLogin(true);
      setPassword('');
      return;
    }

    // Simulate login
    setAuth({ isAuthenticated: true, role });
    if (role === 'user') {
      navigate('/user/dashboard');
    } else {
      navigate('/doctor/dashboard');
    }
  };

  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', position: 'relative' }}>

      {/* Dynamic Background */}
      <div style={{ position: 'absolute', top: '20%', left: '20%', width: '400px', height: '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', zIndex: 0, animation: 'float 8s infinite alternate' }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, animation: 'float 6s infinite alternate-reverse' }}></div>

      <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '480px', padding: '3rem 2.5rem', zIndex: 1, backgroundColor: 'rgba(30, 41, 59, 0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="pulse-primary" style={{ background: 'linear-gradient(135deg, var(--primary), #60a5fa)', color: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)' }}>
            <HeartPulse size={36} strokeWidth={2} />
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 800 }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          {isLogin ? 'Enter your details to sign in.' : 'Join Healthify today.'}
        </p>

        {/* Auth Toggle */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-lg)', padding: '0.35rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            style={{ flex: 1, padding: '0.6rem', borderRadius: 'var(--radius)', backgroundColor: isLogin ? 'var(--primary)' : 'transparent', boxShadow: isLogin ? 'var(--shadow)' : 'none', fontWeight: isLogin ? 600 : 500, color: isLogin ? 'white' : 'var(--text-muted)', transition: 'all 0.3s' }}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Sign In
          </button>
          <button
            style={{ flex: 1, padding: '0.6rem', borderRadius: 'var(--radius)', backgroundColor: !isLogin ? 'var(--primary)' : 'transparent', boxShadow: !isLogin ? 'var(--shadow)' : 'none', fontWeight: !isLogin ? 600 : 500, color: !isLogin ? 'white' : 'var(--text-muted)', transition: 'all 0.3s' }}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Sign Up
          </button>
        </div>

        {/* Role Selection */}
        <div className="animate-fade-in" style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-muted)' }}>I am a...</label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setRole('user')}
              style={{ flex: 1, padding: '1.25rem 1rem', border: role === 'user' ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', backgroundColor: role === 'user' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0,0,0,0.2)', transition: 'all 0.3s', boxShadow: role === 'user' ? '0 0 15px rgba(59,130,246,0.2)' : 'none' }}
            >
              <User size={28} color={role === 'user' ? 'var(--primary)' : 'var(--text-muted)'} />
              <span style={{ fontWeight: 600, color: role === 'user' ? 'white' : 'var(--text-muted)' }}>Patient</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('doctor')}
              style={{ flex: 1, padding: '1.25rem 1rem', border: role === 'doctor' ? '2px solid var(--secondary)' : '2px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', backgroundColor: role === 'doctor' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0,0,0,0.2)', transition: 'all 0.3s', boxShadow: role === 'doctor' ? '0 0 15px rgba(16,185,129,0.2)' : 'none' }}
            >
              <Stethoscope size={28} color={role === 'doctor' ? 'var(--secondary)' : 'var(--text-muted)'} />
              <span style={{ fontWeight: 600, color: role === 'doctor' ? 'white' : 'var(--text-muted)' }}>Doctor</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-in delay-100">
          {!isLogin && (
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
              <input type="text" className="input" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
            <input type="email" className="input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Password</label>
            <input type="password" className="input" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className={role === 'doctor' ? 'btn btn-secondary' : 'btn btn-primary'} style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
