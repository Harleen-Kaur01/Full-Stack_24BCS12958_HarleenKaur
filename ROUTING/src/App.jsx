import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import DashboardLayout from './components/DashboardLayout';

export default function App() {
  return (
    <BrowserRouter>
      {/* 1. Global Navigation Bar */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Route Declarations */}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard Parent Route (Acting as Layout) */}
        <Route path="/dashboard" element={<DashboardLayout />}/>
          {/* Nested Child Pages */}
       
      </Routes>
    </BrowserRouter>
  );
}
