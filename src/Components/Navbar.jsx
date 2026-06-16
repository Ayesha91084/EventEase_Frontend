import { useNavigate, Link } from 'react-router-dom';
import NotificationBell from "./NotificationBell";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="ee-nav">
      <div className="ee-logo">Event<span>Ease</span></div>
      <div className="ee-nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="ee-nav-actions">
        <NotificationBell/>
        <button className="ee-btn-ghost" onClick={() => navigate('/login')}>Login</button>
        <button className="ee-btn-primary" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </nav>
  );
}