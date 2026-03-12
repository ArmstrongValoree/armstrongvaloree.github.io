import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";
import "./BackOffice.css";

function BackOffice() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
    } else {
      setAuthChecked(true);
      fetchMessages();
    }
  }

  async function fetchMessages() {
    setLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMessages(data);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    const { error } = await supabase.from("messages").delete().eq("id", id);

    if (!error) {
      setMessages(messages.filter((m) => m.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (!authChecked) return null;

  return (
    <div className="backoffice-page">
      {/* Header */}
      <div className="backoffice-header">
        <div className="backoffice-header-content">
          <h1 className="backoffice-title">Back Office</h1>
          <p className="backoffice-subtitle">
            Manage incoming messages from your portfolio contact form.
          </p>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Sign Out
        </button>
      </div>

      {/* Messages Table */}
      <div className="backoffice-content">
        {loading ? (
          <div className="backoffice-loading">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="backoffice-empty">No messages yet.</div>
        ) : (
          <div className="table-wrapper">
            <table className="messages-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td className="message-preview">{msg.message}</td>
                    <td className="message-date">
                      {formatDate(msg.created_at)}
                    </td>
                    <td className="message-actions">
                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="btn-view"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMessage && (
        <div className="modal-overlay" onClick={() => setSelectedMessage(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedMessage(null)}
            >
              ✕
            </button>
            <h2 className="modal-title">Message from {selectedMessage.name}</h2>
            <div className="modal-accent"></div>
            <div className="modal-field">
              <span className="modal-label">Email</span>
              <span className="modal-value">{selectedMessage.email}</span>
            </div>
            <div className="modal-field">
              <span className="modal-label">Date</span>
              <span className="modal-value">
                {formatDate(selectedMessage.created_at)}
              </span>
            </div>
            <div className="modal-field">
              <span className="modal-label">Message</span>
              <p className="modal-message">{selectedMessage.message}</p>
            </div>
            <button
              onClick={() => handleDelete(selectedMessage.id)}
              className="btn-delete-modal"
            >
              Delete Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BackOffice;
