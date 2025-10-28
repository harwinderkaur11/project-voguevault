import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: url("https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg") no-repeat center center fixed;
          background-size: cover;
          color: #333;
        }
        header {
          background: #f8d3e1;
          padding: 20px;
          text-align: center;
          color: #ff69b4;
          font-size: 28px;
          font-weight: 700;
          border-bottom: 2px solid #f8d3e1;
        }
        .profile-container {
          max-width: 800px;
          margin: 50px auto;
          background: white;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border: 2px solid #ffc0cb;
        }
        .profile-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .profile-header img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
          border: 3px solid #ff69b4;
        }
        .profile-header h2 {
          color: #ff69b4;
          margin-bottom: 5px;
        }
        .profile-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          font-size: 15px;
        }
        .info-box {
          background: #fff5f8;
          padding: 15px;
          border-radius: 15px;
          border: 1px solid #ffc0cb;
        }
        .info-box strong {
          color: #ff69b4;
        }
        .edit-btn {
          display: inline-block;
          background: #ff69b4;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          margin-top: 30px;
          transition: background 0.3s;
        }
        .edit-btn:hover {
          background: #ff85c1;
        }
        footer {
          background: #f8d3e1;
          padding: 15px;
          text-align: center;
          color: #999;
          font-size: 14px;
          border-top: 2px solid #ffb6c1;
          margin-top: 40px;
        }
      `}</style>

      <header>👩 Your Vogue Vault Profile</header>

      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt="User Avatar"
          />
          <h2>Harshita Goyal</h2>
          <p>@harshita.vogue</p>
        </div>

        <div className="profile-info">
          <div className="info-box">
            <strong>Email:</strong> harshita@example.com
          </div>
          <div className="info-box">
            <strong>Member Since:</strong> March 2024
          </div>
          <div className="info-box">
            <strong>Total Posts:</strong> 14
          </div>
          <div className="info-box">
            <strong>Saved Trends:</strong> 27
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/settings" className="edit-btn">
            ✏️ Edit Profile
          </Link>
        </div>
      </div>

      <footer>© 2025 Vogue Vault | Designed with 💖 for fashion lovers</footer>
    </>
  );
}
