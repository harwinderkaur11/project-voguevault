import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
        .dashboard {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
        }
        .welcome {
          text-align: center;
          background: #fff;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          margin-bottom: 40px;
          border: 2px solid #ffc0cb;
        }
        .welcome h2 {
          color: #ff69b4;
          margin-bottom: 10px;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 18px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s, background 0.3s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .card:hover {
          transform: translateY(-6px);
          background: linear-gradient(135deg, #f8d3e1, #ffc0cb, #ffb6c1e6, #ff69b4);
          color: white;
        }
        .card h3 {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 600;
        }
        .card p {
          font-size: 14px;
          color: #555;
        }
        .card:hover p {
          color: white;
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

      {/* <header>✨ Vogue Vault ✨</header> */}
      <div className="dashboard">
        <div className="welcome">
          <h2>Welcome, Harshita!</h2>
          <p>Here’s your personalized Vogue Vault dashboard 💖</p>
        </div>

        <div className="cards">
          <Link to="/profile" className="card">
            <h3>👩 Profile</h3>
            <p>View and update your personal info.</p>
          </Link>
          <Link to="/myposts" className="card">
            <h3>📝 My Posts</h3>
            <p>See and manage your blog posts.</p>
          </Link>
          <Link to="/savedtrends" className="card">
            <h3>💾 Saved Trends</h3>
            <p>Access your bookmarked fashion trends.</p>
          </Link>
          <Link to="/settings" className="card">
            <h3>⚙ Settings</h3>
            <p>Change preferences and account settings.</p>
          </Link>
          <Link to="/" className="card">
            <h3>🚪 Logout</h3>
            <p>Log out of your Vogue Vault account.</p>
          </Link>
        </div>
      </div>

      {/* <footer>© 2025 Vogue Vault | Designed with 💖 for fashion lovers</footer> */}
    </>
  );
}
