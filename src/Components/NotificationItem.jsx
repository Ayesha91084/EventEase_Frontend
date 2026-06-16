import { useNotifications } from "./NotificationContext";

function NotificationItem({ notification }) {
  const { markAsRead } = useNotifications();

  return (
    <div
      onClick={() => !notification.isRead && markAsRead(notification._id)}
      style={{
        padding: "10px",
        borderBottom: "1px solid #f0f0f0",
        background: notification.isRead ? "#fff" : "#f0f8ff",
        cursor: "pointer",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>{notification.message}</p>
      <span style={{ fontSize: "12px", color: "#888" }}>
        {new Date(notification.createdAt).toLocaleString()}
      </span>
    </div>
  );
}

export default NotificationItem;