import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./Components/BookingContext";
import { dummyVenues } from "./Components/VendorsData";
import VendorCalendar from "./Components/VendorCalendar";
import "./Photographer.css";


const portfolioItems = [
  {
    id: 1,
    featured: true,
    caption: "Grand Banquet Gala",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80",
    hasPlay: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
    hasPlay: true,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
    hasPlay: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    hasPlay: true,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
    hasPlay: true,
  },
];

const services = [
  {
    id: 1,
    icon: "photo_camera",
    name: "Digital Photography",
    desc: "High-resolution digital coverage using state-of-the-art Sony & Canon systems for crisp, vibrant results.",
    price: "From Rs. 1,200",
  },
  {
    id: 2,
    icon: "videocam",
    name: "4K Cinematography",
    desc: "Story-driven wedding films with professional audio recording and color grading for a true movie experience.",
    price: "From Rs. 2,500",
  },
  {
    id: 3,
    icon: "auto_fix_high",
    name: "Event Showcase",
    desc: "Complete coverage of corporate events, launches, and gala nights with rapid 24-hour turnaround for socials.",
    price: "From Rs. 8000",
  },
];

// ─── VENDOR HEADER ─────────────────────────────────────────────────────────────
function VendorHeader({ vendor, navigate, onBookNow }) {
  return (
    <div className="vendor-header">
      {/* Avatar */}
      <div className="vendor-header__avatar">
        <div
          className="vendor-header__avatar-img"
          style={{
            background: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: "50%",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 40, color: "#9ca3af" }}
          >
            photo_camera
          </span>
        </div>
        <div className="vendor-header__avatar-label">{vendor.avatarLabel}</div>
      </div>

      {/* Info */}
      <div className="vendor-header__info">
        <div className="vendor-header__name-row">
          <h1 className="vendor-header__name">{vendor.name}</h1>
          <div className="vendor-header__rating">
            <span className="material-symbols-outlined star" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>{vendor.rating.toFixed(1)} Rating</span>
          </div>
        </div>

        <div className="vendor-header__contacts">
          <div className="vendor-header__contact-item">
            <div className="contact-icon contact-icon--blue">
              <span className="material-symbols-outlined">call</span>
            </div>
            {vendor.phone}
          </div>
          <div className="vendor-header__contact-item">
            <div className="contact-icon contact-icon--teal">
              <span className="material-symbols-outlined">mail</span>
            </div>
            {vendor.email}
          </div>
          <div className="vendor-header__location">
            <span className="material-symbols-outlined" style={{ fontSize: 17, color: "#6b7280" }}>
              location_on
            </span>
            {vendor.location}
          </div>
        </div>

        <div className="vendor-header__cta">
          <button className="btn-chat" onClick={() => navigate(`/chat/${vendor.id}`)}> Chat with Vendor </button>
          <button className="btn-book" onClick={onBookNow}>Book Now</button>
          <button className="btn-deposit">Pay Deposit</button>
        </div>
      </div>
    </div>
  );
}

// ─── PORTFOLIO SECTION ─────────────────────────────────────────────────────────
function PortfolioSection({ items }) {
  return (
    <section className="portfolio-section">
      <div className="section-header">
        <div className="section-header__text">
          <h2>Our Portfolio</h2>
          <p>A showcase of cinematic excellence and timeless event memories.</p>
        </div>
        <a href="#" className="section-header__link">
          View All
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_right_alt</span>
        </a>
      </div>

      <div className="portfolio-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`portfolio-item${item.featured ? " portfolio-item--featured" : ""}`}
          >
            <img
              src={item.img}
              alt={item.caption || `Portfolio item ${item.id}`}
              className="portfolio-item__img"
            />

            {item.hasPlay && (
              <div className="portfolio-item__play">
                
                  <span className="material-symbols-outlined">play_arrow</span>
                </div>
            )}

            {item.caption && (
              <div className="portfolio-item__caption">{item.caption}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ──────────────────────────────────────────────────────────
function ServicesSection({ services }) {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="service-card__icon">
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <h3 className="service-card__name">{s.name}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <span className="service-card__price">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
function getCategoryFromType(type) {
  const t = (type || "").toLowerCase();
  if (t.includes("photo")) return "photographer";
  if (t.includes("decor")) return "decorator";
  return "venue"; // Marquee, Hotel, Farmhouse, Hall, Convention Centre, Caterers
}
export default function VendorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setVendor } = useBooking();
  const vendor = dummyVenues.find((v) => v.id === Number(id));

  if (!vendor) return <p>Vendor not found</p>;

  const handleBookNow = () => {
  setVendor({
    id: vendor.id,
    name: vendor.name,
    category: getCategoryFromType(vendor.type),
    price: vendor.price,
  });
  navigate("/details");
};

  return (
    <>
      {/* Material Symbols Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <main className="vendor-page">
        <VendorHeader vendor={vendor} navigate={navigate} onBookNow={handleBookNow} />
        <PortfolioSection items={portfolioItems} />
        <ServicesSection services={services} />
        <VendorCalendar vendor={vendor} /> 
      </main>
    </>
  );
}
