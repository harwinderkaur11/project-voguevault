import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [username, setUsername] = useState("HarshitaGoyal");
  const [bio, setBio] = useState("Creative blogger and tech enthusiast ✨");

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: url("https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg") no-repeat center center fixed;
          background-size: cover;
        }

        .settings-container {
          max-width: 900px;
          margin: 50px auto;
          background: white;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border: 2px solid #ffc0cb;
        }

        .settings-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .settings-header h1 {
          color: #ff69b4;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: #555;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid #ffd6e0;
          border-radius: 10px;
          font-size: 0.95rem;
          outline: none;
          transition: 0.3s;
          background-color: #fff9fb;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #ff69b4;
          box-shadow: 0 0 5px rgba(255,105,180,0.4);
        }

        .switch-group {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff9fb;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid #ffd6e0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .switch-label {
          font-size: 1rem;
          font-weight: 500;
          color: #555;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 26px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #ff69b4;
        }

        input:checked + .slider:before {
          transform: translateX(24px);
        }

        .save-btn {
          background-color: #ff69b4;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          display: block;
          margin: 30px auto 0;
        }

        .save-btn:hover {
          background-color: #ff85c1;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-header">
          <h1>⚙️ Account Settings</h1>
          <p style={{ color: "#888", fontSize: "0.95rem" }}>
            Customize your Vogue Vault profile and preferences 💅
          </p>
        </div>

        <form className="settings-form">
          <div className="form-group">
            <label>👤 Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>📝 Bio</label>
            <textarea
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div className="switch-group">
            <span className="switch-label">🌙 Dark Mode</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="switch-group">
            <span className="switch-label">📩 Email Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <button type="button" className="save-btn">
            💾 Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
