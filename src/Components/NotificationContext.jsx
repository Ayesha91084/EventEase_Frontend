import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  // Temporary dummy data - baad mein real API se replace karenge
  const [notifications, setNotifications] = useState([
    {
      _id: "1",
      message: "Your booking request has been accepted",
      isRead: false,
      createdAt: new Date(),
    },
    {
      _id: "2",
      message: "New message from vendor",
      isRead: true,
      createdAt: new Date(),
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n._id === notificationId ? { ...n, isRead: true } : n
      )
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, unreadCount, markAsRead }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}