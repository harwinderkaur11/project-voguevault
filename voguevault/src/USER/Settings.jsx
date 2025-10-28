import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [username, setUsername] = useState("HarshitaGoyal");
  const [bio, setBio] = useState("Creative blogger and tech enthusiast ✨");

  return (
    <>
      <style>{`
        .settings-container {
          font-family: "Poppins", sans-serif;
          background-color: #fafafa;
          min-height: 100vh;
          padding: 40px 60px;
        }

        .settings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .settings-header h1 {
          color: #333;
          font-size: 2rem;
          font-weight: 600;
        }

        .settings-form {
          background: #fff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          max-width: 600px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: #555;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #ff4081;
        }

        .switch-group {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f9f9f9;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .switch-label {
          font-size: 0.95rem;
          color: #444;
          font-weight: 500;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 45px;
          height: 24px;
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
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #ff4081;
        }

        input:checked + .slider:before {
          transform: translateX(21px);
        }

        .save-btn {
          background-color: #ff4081;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
        }

        .save-btn:hover {
          background-color: #e73370;
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <button className="save-btn">Save Changes</button>
        </div>

        <form className="settings-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div className="switch-group">
            <span className="switch-label">Dark Mode</span>
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
            <span className="switch-label">Email Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
