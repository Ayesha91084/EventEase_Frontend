import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatPage.css";

const conversations = [
  {
    id: 1,
    name: "Moon Photography",
    type: "photo",
    icon: "photo_camera",
    preview: "Yes we are available!",
    time: "2m",
    unread: 2,
    online: true,
    location: "Lahore",
    price: "PKR 10,000",
    verified: true,
    messages: [
      { id: 1, from: "vendor", text: "Assalam o Alaikum! Thank you for reaching out to Moon Photography. How can we help you today?", time: "09:15 AM" },
      { id: 2, from: "me", text: "Hi! I'm interested in your wedding package for 15 August. Are you available on that date?", time: "09:18 AM" },
      { id: 3, from: "vendor", text: "Yes! The 15th is open. It's a popular date so I can hold it for you for 24 hours while we discuss the details.", time: "09:20 AM" },
      { id: 4, from: "me", text: "That would be great! Please send me the full package details.", time: "09:22 AM" },
    ],
  },
  {
    id: 2,
    name: "Hanif Rajput Decor",
    type: "dec",
    icon: "yard",
    preview: "Send us your event date",
    time: "1h",
    unread: 0,
    online: false,
    location: "Karachi",
    price: "PKR 10,000",
    verified: true,
    messages: [
      { id: 1, from: "vendor", text: "Hello! Welcome to Hanif Rajput Design. How can we assist you?", time: "08:00 AM" },
      { id: 2, from: "me", text: "I need decor for a wedding in September.", time: "08:05 AM" },
      { id: 3, from: "vendor", text: "Please send us your event date and venue so we can check availability.", time: "08:10 AM" },
    ],
  },
  {
    id: 3,
    name: "Zaiqa Catering",
    type: "cat",
    icon: "restaurant",
    preview: "Menu details attached",
    time: "3h",
    unread: 0,
    online: true,
    location: "Lahore",
    price: "PKR 5,000",
    verified: false,
    messages: [
      { id: 1, from: "vendor", text: "Assalam o Alaikum! Welcome to Zaiqa Catering. What event are you planning?", time: "07:00 AM" },
      { id: 2, from: "me", text: "We need catering for 300 guests for a wedding.", time: "07:10 AM" },
      { id: 3, from: "vendor", text: "We have sent you the menu details. Please check!", time: "07:20 AM" },
    ],
  },
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [allConvos, setAllConvos] = useState(conversations);
  const [search, setSearch] = useState("");

  const activeConvo = allConvos.find((c) => c.id === activeId);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: activeConvo.messages.length + 1,
      from: "me",
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setAllConvos((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, newMsg], preview: inputText.trim() }
          : c
      )
    );
    setInputText("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const filtered = allConvos.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cp-page">
      {/* TOPBAR */}

      {/* CHAT LAYOUT */}
      <div className="cp-layout">
        {/* SIDEBAR */}
        <aside className="cp-sidebar">
          <div className="cp-sidebar-header">
            <p>Messages</p>
            <span>{allConvos.length} conversations</span>
          </div>
          <div className="cp-search">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search vendors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="cp-convo-list">
            {filtered.map((c) => (
              <div
                key={c.id}
                className={`cp-convo-item ${c.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(c.id)}
              >
                <div className={`cp-avatar cp-avatar-${c.type}`}>
                  <span className="material-symbols-outlined">{c.icon}</span>
                  {c.online && <div className="cp-online-dot"></div>}
                </div>
                <div className="cp-convo-info">
                  <div className="cp-convo-name">{c.name}</div>
                  <div className="cp-convo-preview">{c.preview}</div>
                </div>
                <div className="cp-convo-meta">
                  <span className="cp-convo-time">{c.time}</span>
                  {c.unread > 0 && (
                    <div className="cp-unread-badge">{c.unread}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CHAT */}
        <main className="cp-chat-main">
          {/* CHAT HEADER */}
          <div className="cp-chat-header">
            <div className={`cp-avatar cp-avatar-${activeConvo.type}`}>
              <span className="material-symbols-outlined">{activeConvo.icon}</span>
              {activeConvo.online && <div className="cp-online-dot"></div>}
            </div>
            <div className="cp-chat-header-info">
              <p>
                {activeConvo.name}
                {activeConvo.verified && (
                  <span className="cp-verified-badge">Verified Pro</span>
                )}
              </p>
              <span className={activeConvo.online ? "cp-online" : "cp-offline"}>
                {activeConvo.online ? "Online" : "Offline"}
              </span>
            </div>
            <div className="cp-chat-header-actions">
              <span className="material-symbols-outlined">call</span>
              <span className="material-symbols-outlined">more_vert</span>
            </div>
          </div>

          {/* VENDOR STRIP */}
          <div className="cp-vendor-strip">
            <span className="material-symbols-outlined">location_on</span>
            <span>
              {activeConvo.name} · {activeConvo.location} · {activeConvo.price} starting
            </span>
            <button className="cp-strip-book">Book Now</button>
          </div>

          {/* MESSAGES */}
          <div className="cp-messages">
            <div className="cp-date-divider">
              <span>Today</span>
            </div>
            {activeConvo.messages.map((msg) => (
              <div
                key={msg.id}
                className={`cp-msg-row ${msg.from === "me" ? "mine" : ""}`}
              >
                <div className={`cp-msg-av ${msg.from === "me" ? "me" : `cp-avatar-${activeConvo.type}`}`}>
                  <span className="material-symbols-outlined">
                    {msg.from === "me" ? "person" : activeConvo.icon}
                  </span>
                </div>
                <div className={`cp-msg-col ${msg.from === "me" ? "mine" : ""}`}>
                  <div className={`cp-bubble ${msg.from === "me" ? "mine" : "vendor"}`}>
                    {msg.text}
                  </div>
                  <div className="cp-msg-time">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="cp-input-area">
            <div className="cp-attach">
              <span className="material-symbols-outlined">attach_file</span>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="cp-send-btn" onClick={sendMessage}>
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}