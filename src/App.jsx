import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import UserDashboard from './pages/UserDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import UserProfile from './pages/UserProfile';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import FindDoctors from './pages/FindDoctors';
import DoctorProfile from './pages/DoctorProfile';
import HealthCheckups from './pages/HealthCheckups';

const ProtectedRoute = ({ isAllowed, children, redirectTo = "/" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};

const App = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null }); // role: 'user' | 'doctor'

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar auth={auth} setAuth={setAuth} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing auth={auth} />} />
            <Route path="/auth" element={<Auth setAuth={setAuth} />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/user/dashboard"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'user'}><UserDashboard /></ProtectedRoute>}
            />
            <Route
              path="/user/doctors"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'user'}><FindDoctors /></ProtectedRoute>}
            />
            <Route
              path="/user/doctor/:id"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'user'}><DoctorProfile /></ProtectedRoute>}
            />
            <Route
              path="/user/checkups"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'user'}><HealthCheckups /></ProtectedRoute>}
            />
            <Route
              path="/user/profile"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'user'}><UserProfile /></ProtectedRoute>}
            />

            <Route
              path="/doctor/dashboard"
              element={<ProtectedRoute isAllowed={auth.isAuthenticated && auth.role === 'doctor'}><DoctorDashboard /></ProtectedRoute>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
