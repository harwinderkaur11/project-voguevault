import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/styles.css";

// 🏠 Main Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";

// 💅 Subpages
import WardrobeGoals from "./subpages/WardrobeGoals.jsx";
import TrendyHairstyles from "./subpages/TrendyHairstyles.jsx";
import BeautyAndSkincare from "./subpages/BeautyAndSKinCare.jsx"; // ✅ fixed capitalization

// 👤 User Pages
import LoginPage from "./LoginPage.jsx";
import Dashboard from "./USER/Dashboard.jsx";
import Profile from "./USER/Profile.jsx";
import MyPosts from "./USER/MyPosts.jsx";
import SavedTrends from "./USER/SavedTrends.jsx";
import Settings from "./USER/Settings.jsx";



export default function App() {
  return (
    <>
      {/* 🌟 Header visible on all pages */}
      <header className="header">
        <h1 className="logo">Vogue Vault</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🛣️ All Routes */}
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />

          {/* Subpages */}
          <Route path="/wardrobe-goals" element={<WardrobeGoals />} />
          <Route path="/trendy-hairstyles" element={<TrendyHairstyles />} />
          <Route path="/beauty-and-skincare" element={<BeautyAndSkincare />} />

          

          {/* User Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/savedtrends" element={<SavedTrends />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      {/* 🩵 Footer visible on all pages */}
      <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-brand">Vogue Vault</h2>
          <p className="footer-tagline">
            Your stylish destination for fashion, beauty & lifestyle trends.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733590.png"
                alt="Pinterest"
              />
            </a>
          </div>

          <p className="copyright">
            &copy; {new Date().getFullYear()} Vogue Vault | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
