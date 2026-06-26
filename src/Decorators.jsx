import { useNavigate } from "react-router-dom";
import { useBooking } from "./Components/BookingContext";
import "./Decorators.css";

// ── Placeholder images (unsplash decor photos) ──────────────
const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Drape & Chandelier Setup",
    cls: "large-left",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
    alt: "Hanging Floral Backdrop",
    cls: "top-right-1",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&q=80",
    alt: "Candle & Fairy-light Garden",
    cls: "top-right-2",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "Floral Table Centrepiece",
    cls: "bottom-right-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80",
    alt: "Mehndi Stage Decor",
    cls: "bottom-right-2",
  },
];

const services = [
  {
    icon: "📷",
    title: "Digital Photography",
    description:
      "High-resolution digital coverage using state-of-the-art Sony & Canon systems for crisp, vibrant results.",
    price: "From Rs. 1,200",
  },
  {
    icon: "🎬",
    title: "4K Cinematography",
    description:
      "Story-driven wedding films with professional audio recording and color grading for a true movie experience.",
    price: "From Rs. 2,500",
  },
  {
    icon: "✨",
    title: "Event Showcase",
    description:
      "Complete coverage of corporate events, launches, and gala nights with rapid 24-hour turnaround for socials.",
    price: "From Rs. 800",
  },
];

const navLinks = ["Home", "Services", "Vendors", "About Us"];

// ── Component ────────────────────────────────────────────────
export default function VendorPage() {
  const navigate = useNavigate();
  const { setVendor } = useBooking();

  const handleBookNow = () => {
    setVendor({
      id: 101,
      name: "Floral Fantasy Decor",
      category: "decorator",
      price: 40000,
    });
    navigate("/details");
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          EventEase
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={link === "Vendors" ? "active" : ""}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button className="nav-icon-btn" aria-label="Notifications">
            🔔
          </button>
          <button className="btn-login">Login</button>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="vendor-page">

        {/* ── Vendor Profile Card ── */}
        <div className="vendor-profile-card">
          <img
            className="vendor-avatar"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
            alt="Floral Fantasy Decor"
          />

          <div className="vendor-info">
            <div className="vendor-name-row">
              <h1 className="vendor-name">Floral Fantasy Decor</h1>
              <span className="vendor-rating-badge">
                <span className="star">⭐</span> 5.0 Rating
              </span>
            </div>

            <div className="vendor-meta-grid">
              <div className="vendor-meta-item">
                <span>092 3XXX 4527</span>
              </div>
              <div className="vendor-meta-item">
                <span>contact@floralfantasy.com</span>
              </div>
              <div className="vendor-meta-item">
                <span>Gulberg III, Lahore, Pakistan</span>
              </div>
            </div>

            <div className="vendor-actions">
              <button className="btn-outline">Chat with Vendor</button>
              <button className="btn-primary" onClick={handleBookNow}>Book Now</button>
              <button className="btn-secondary">Pay Deposit</button>
            </div>
          </div>
        </div>

        {/* ── Portfolio Section ── */}
        <section className="portfolio-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Our Portfolio</h2>
              <p className="section-subtitle">
                A showcase of cinematic excellence and timeless event decor
              </p>
            </div>
            <a href="#" className="view-all-link">
              View All →
            </a>
          </div>

          <div className="portfolio-grid">
            {portfolioImages.map((img) => (
              <div
                key={img.alt}
                className={`portfolio-item ${img.cls}`}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="services-section">
          <div className="services-grid">
            {services.map((svc) => (
              <div className="service-card" key={svc.title}>
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-description">{svc.description}</p>
                <span className="service-price">{svc.price}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div>
          <div className="footer-brand">EventEase</div>
          <div className="footer-copy">© 2024 EventEase. The Digital Curator.</div>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Support</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </>
  );
}