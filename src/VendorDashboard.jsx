import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorDashboard.css";

// ─── DUMMY DATA (baad mein API se replace karna) ─────────────────────────────
const dummyBookings = [
  { id: 1, name: "Ayesha Khan", initials: "AK", desc: "Elegant lightning grid, floral scheme backdrop, setup time adjustment requested.", date: "Dec 15, 2026", status: "new" },
  { id: 2, name: "Zara Raza", initials: "ZR", desc: "Full outdoor marquee, 400 guests, traditional continental menu mix.", date: "Jan 05, 2027", status: "pending" },
  { id: 3, name: "Sara Malik", initials: "SM", desc: "Indoor wedding hall decoration, 200 guests, fairy lights.", date: "Nov 20, 2026", status: "done" },
  { id: 4, name: "Fatima Ahmed", initials: "FA", desc: "Corporate event photography, full day coverage.", date: "Nov 10, 2026", status: "done" },
];

const dummyMessages = [
  { id: 1, name: "Ayesha Khan", initials: "AK", preview: "Can you adjust the setup time to 4pm?", time: "2h ago", unread: true },
  { id: 2, name: "Zara Raza", initials: "ZR", preview: "Please confirm the continental menu details.", time: "5h ago", unread: true },
  { id: 3, name: "Sara Malik", initials: "SM", preview: "Thank you! The event was amazing.", time: "Yesterday", unread: false },
];

const revenueData = [
  { month: "Jan", amount: 55 },
  { month: "Feb", amount: 40 },
  { month: "Mar", amount: 70 },
  { month: "Apr", amount: 80 },
  { month: "May", amount: 60 },
  { month: "Jun", amount: 90 },
];

// ─── TAG COMPONENT ────────────────────────────────────────────────────────────
function StatusTag({ status }) {
  const map = {
    new: { label: "New", className: "tag-new" },
    pending: { label: "Pending", className: "tag-pending" },
    done: { label: "Completed", className: "tag-done" },
  };
  const s = map[status] || map.pending;
  return <span className={`vd-tag ${s.className}`}>{s.label}</span>;
}

// ─── OVERVIEW TAB ─────────────────────────────────────────────────────────────
function OverviewTab({ onGoToBookings }) {
  return (
    <div>
      <div className="vd-section-label">Overview</div>

      {/* Stats */}
      <div className="vd-stats-grid">
        <div className="vd-stat-card">
          <div className="vd-stat-label">Gross Revenue</div>
          <div className="vd-stat-value">Rs. 380k</div>
          <div className="vd-stat-sub green">↑ 12% this month</div>
        </div>
        <div className="vd-stat-card">
          <div className="vd-stat-label">Incoming Requests</div>
          <div className="vd-stat-value">02</div>
          <div className="vd-stat-sub green">Action required</div>
        </div>
        <div className="vd-stat-card">
          <div className="vd-stat-label">Portfolio Items</div>
          <div className="vd-stat-value">05</div>
          <div className="vd-stat-sub muted">Cloudinary hosted</div>
        </div>
        <div className="vd-stat-card">
          <div className="vd-stat-label">Overall Rating</div>
          <div className="vd-stat-value">4.9</div>
          <div className="vd-stat-sub green">28 reviews</div>
        </div>
      </div>

      {/* Two columns */}
      <div className="vd-two-col">
        {/* Incoming Requests */}
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">Incoming requests</span>
            <span className="vd-card-link" onClick={onGoToBookings}>View all</span>
          </div>
          {dummyBookings.filter(b => b.status !== "done").map(b => (
            <div key={b.id} className="vd-booking-item">
              <div className="vd-b-avatar">{b.initials}</div>
              <div className="vd-b-info">
                <StatusTag status={b.status} />
                <div className="vd-b-name">{b.name}</div>
                <div className="vd-b-desc">{b.desc}</div>
              </div>
              <div className="vd-b-meta">
                <button className="vd-btn-acc">Accept</button>
                <button className="vd-btn-rej">Reject</button>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">Monthly revenue</span>
          </div>
          {revenueData.map(r => (
            <div key={r.month} className="vd-bar-row">
              <span className="vd-bar-label">{r.month}</span>
              <div className="vd-bar-bg">
                <div className="vd-bar-fill" style={{ width: `${r.amount}%` }} />
              </div>
              <span className="vd-bar-val">{r.amount}k</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BOOKINGS TAB ─────────────────────────────────────────────────────────────
function BookingsTab() {
  return (
    <div>
      <div className="vd-section-label">My Bookings</div>
      <div className="vd-card">
        {dummyBookings.map(b => (
          <div key={b.id} className="vd-booking-item">
            <div className="vd-b-avatar">{b.initials}</div>
            <div className="vd-b-info">
              <StatusTag status={b.status} />
              <div className="vd-b-name">{b.name}</div>
              <div className="vd-b-desc">{b.desc}</div>
            </div>
            <div className="vd-b-meta">
              <div className="vd-b-date">{b.date}</div>
              {b.status !== "done" && (
                <>
                  <button className="vd-btn-acc">Accept</button>
                  <button className="vd-btn-rej">Reject</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PORTFOLIO TAB ────────────────────────────────────────────────────────────
function PortfolioTab() {
  const items = [
    { label: "Wedding shoot" },
    { label: "Event reel" },
    { label: "Decor setup" },
    { label: "Marquee night" },
    { label: "Highlights" },
  ];
  return (
    <div>
      <div className="vd-section-label">Service & Portfolio</div>
      <div className="vd-card">
        <div className="vd-card-header">
          <span className="vd-card-title">Uploaded work</span>
          <span className="vd-card-link">+ Add item</span>
        </div>
        <div className="vd-portfolio-grid">
          {items.map((item, i) => (
            <div key={i} className="vd-port-item">
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <span className="vd-port-label">{item.label}</span>
            </div>
          ))}
          <div className="vd-port-item vd-port-add">
            <span style={{ fontSize: 28 }}>+</span>
            <span className="vd-port-label">Upload new</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ANALYTICS TAB ────────────────────────────────────────────────────────────
function AnalyticsTab() {
  return (
    <div>
      <div className="vd-section-label">Sales Analytics</div>
      <div className="vd-two-col">
        <div className="vd-card">
          <div className="vd-card-header"><span className="vd-card-title">Revenue by month</span></div>
          {revenueData.map(r => (
            <div key={r.month} className="vd-bar-row">
              <span className="vd-bar-label">{r.month}</span>
              <div className="vd-bar-bg"><div className="vd-bar-fill" style={{ width: `${r.amount}%` }} /></div>
              <span className="vd-bar-val">{r.amount}k</span>
            </div>
          ))}
        </div>
        <div className="vd-card">
          <div className="vd-card-header"><span className="vd-card-title">Booking summary</span></div>
          <div className="vd-bar-row">
            <span className="vd-bar-label" style={{ width: 70 }}>Completed</span>
            <div className="vd-bar-bg"><div className="vd-bar-fill" style={{ width: "75%" }} /></div>
            <span className="vd-bar-val">18</span>
          </div>
          <div className="vd-bar-row">
            <span className="vd-bar-label" style={{ width: 70 }}>Pending</span>
            <div className="vd-bar-bg"><div className="vd-bar-fill" style={{ width: "20%", background: "#ef9f27" }} /></div>
            <span className="vd-bar-val">04</span>
          </div>
          <div className="vd-bar-row">
            <span className="vd-bar-label" style={{ width: 70 }}>Cancelled</span>
            <div className="vd-bar-bg"><div className="vd-bar-fill" style={{ width: "8%", background: "#d85a30" }} /></div>
            <span className="vd-bar-val">02</span>
          </div>
          <div className="vd-total">
            <div className="vd-stat-label">Total earned this year</div>
            <div className="vd-stat-value" style={{ fontSize: 26 }}>Rs. 380,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MESSAGES TAB ─────────────────────────────────────────────────────────────
function MessagesTab() {
  return (
    <div>
      <div className="vd-section-label">Live Messenger</div>
      <div className="vd-msg-list">
        {dummyMessages.map(m => (
          <div key={m.id} className="vd-msg-item">
            <div className="vd-msg-avatar">{m.initials}</div>
            <div className="vd-msg-body">
              <div className="vd-msg-name">{m.name}</div>
              <div className="vd-msg-preview">{m.preview}</div>
            </div>
            <div className="vd-msg-right">
              <span className="vd-msg-time">{m.time}</span>
              {m.unread && <div className="vd-unread-dot" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SETTINGS TAB ────────────────────────────────────────────────────────────
function SettingsTab() {
  const [form, setForm] = useState({ businessName: "My Event Studio", city: "Lahore", description: "Premium event services since 2020" });
  const [notifications, setNotifications] = useState({ bookings: true, payments: true, promo: false });

  return (
    <div>
      <div className="vd-section-label">Account Settings</div>

      {/* Business Info */}
      <div className="vd-card">
        <div className="vd-card-title" style={{ marginBottom: 14 }}>Business info</div>
        <div className="vd-input-row">
          <label className="vd-input-label">Business name</label>
          <input className="vd-input-field" value={form.businessName} onChange={e => setForm({ ...form, businessName: e.target.value })} />
        </div>
        <div className="vd-input-row">
          <label className="vd-input-label">City</label>
          <input className="vd-input-field" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
        </div>
        <div className="vd-input-row">
          <label className="vd-input-label">Description</label>
          <input className="vd-input-field" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        </div>
        <button className="vd-save-btn">Save changes</button>
      </div>

      {/* Notifications */}
      <div className="vd-card">
        <div className="vd-card-title" style={{ marginBottom: 14 }}>Notifications</div>
        {[
          { key: "bookings", label: "New booking requests", sub: "Get notified when a customer books" },
          { key: "payments", label: "Payment received", sub: "Alert on deposit or full payment" },
          { key: "promo", label: "Promotional emails", sub: "EventEase offers and updates" },
        ].map(n => (
          <div key={n.key} className="vd-settings-row">
            <div>
              <div className="vd-settings-label">{n.label}</div>
              <div className="vd-settings-sub">{n.sub}</div>
            </div>
            <div
              className={`vd-toggle ${notifications[n.key] ? "on" : "off"}`}
              onClick={() => setNotifications(prev => ({ ...prev, [n.key]: !prev[n.key] }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
const TABS = [
  { key: "overview", label: "Overview",  },
  { key: "bookings", label: "My Bookings", },
  { key: "portfolio", label: "Portfolio", },
  { key: "analytics", label: "Analytics", },
  { key: "messages", label: "Messages", },
  { key: "settings", label: "Settings", },
];

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const vendorName = localStorage.getItem("vendorName") || "Vendor";
  const vendorEmail = localStorage.getItem("userId") || "vendor@email.com";
  const initials = vendorName.charAt(0).toUpperCase();

  const topbarTitles = {
    overview: "Vendor Control Workspace",
    bookings: "My Bookings",
    portfolio: "Service & Portfolio",
    analytics: "Sales Analytics",
    messages: "Live Messenger",
    settings: "Account Settings",
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <OverviewTab onGoToBookings={() => setActiveTab("bookings")} />;
      case "bookings": return <BookingsTab />;
      case "portfolio": return <PortfolioTab />;
      case "analytics": return <AnalyticsTab />;
      case "messages": return <MessagesTab />;
      case "settings": return <SettingsTab />;
      default: return null;
    }
  };

  return (
    <div className="vd-dash">
      {/* Sidebar */}
      <div className="vd-sidebar">
        <div className="vd-sidebar-logo">
          <span className="vd-brand">EventEase</span>
          <span className="vd-badge">vendor</span>
        </div>

        <div className="vd-sidebar-label">Main Panel</div>

        {TABS.map(tab => (
          <div
            key={tab.key}
            className={`vd-nav-item ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </div>
        ))}

        <div className="vd-sidebar-bottom">
          <div className="vd-vendor-info">
            <div className="vd-avatar">{initials}</div>
            <div>
              <div className="vd-vname">{vendorName}</div>
              <div className="vd-vemail">{vendorEmail}</div>
            </div>
          </div>
          <button
            className="vd-logout-btn"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="vd-main">
        <div className="vd-topbar">
          <span className="vd-topbar-title">{topbarTitles[activeTab]}</span>
          <div className="vd-topbar-right">
            <span className="vd-status-dot" />
            <span className="vd-status-text">Active</span>
          </div>
        </div>
        <div className="vd-content">{renderTab()}</div>
      </div>
    </div>
  );
}
