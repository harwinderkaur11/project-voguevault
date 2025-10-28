import React from "react";
import { useNavigate } from "react-router-dom";

export default function BeautyAndSkincare() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* Header
      <header style={styles.header}>
        <h1 style={styles.title}>Vogue Vault</h1>
        <nav>
          <a
            href="#"
            style={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            href="#"
            style={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              navigate("/categories");
            }}
          >
            Categories
          </a>
          <a
            href="#"
            style={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            Sign Up
          </a>
        </nav>
      </header> */}

      {/* Main Blog Container */}
      <div style={styles.container}>
        <h2 style={styles.heading}>Beauty & Skincare</h2>
        <p style={styles.intro}>
          Discover timeless beauty rituals, modern skincare tips, and routines for glowing, radiant skin.
        </p>

        {/* Blog Content */}
        <img
          src="https://www.shankara.in/cdn/shop/articles/13_Skincare_Tips_for_Dry_Skin___From_Cleansing_to_Moisturizing.jpg?v=1726823781"
          alt="Beauty and Skincare"
          style={styles.image}
        />

        <div style={styles.blogText}>
          <h3 style={styles.subheading}>1. Cleanse Gently</h3>
          <p style={styles.para}>
            Use a mild, hydrating cleanser to remove impurities without stripping away essential oils. Your skin
            should feel clean, not tight.
          </p>

          <h3 style={styles.subheading}>2. Moisturize Daily</h3>
          <p style={styles.para}>
            Lock in hydration with a nourishing moisturizer both morning and night. Look for ingredients like
            hyaluronic acid and ceramides.
          </p>

          <h3 style={styles.subheading}>3. Sun Protection</h3>
          <p style={styles.para}>
            Never skip sunscreen. A broad-spectrum SPF protects your skin from UV damage and premature aging.
          </p>

          <h3 style={styles.subheading}>4. Exfoliate Weekly</h3>
          <p style={styles.para}>
            Exfoliating 1–2 times a week helps remove dead skin cells, revealing a smoother and more luminous
            complexion.
          </p>

          <h3 style={styles.subheading}>5. Healthy Lifestyle</h3>
          <p style={styles.para}>
            Skincare starts from within — eat well, hydrate, sleep adequately, and manage stress for that
            natural glow.
          </p>
        </div>

        <button style={styles.backButton} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      {/* Footer
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Vogue Vault | All Rights Reserved</p>
      </footer> */}
    </div>
  );
}

// 💖 CSS-in-JS Styling
const styles = {
  page: {
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    background:
      "url('https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg') no-repeat center center / cover",
    color: "#333",
    minHeight: "100vh",
  },
  header: {
    background: "rgba(255,182,193,0.9)",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  title: {
    color: "#ff69b4",
    fontSize: "28px",
    margin: 0,
  },
  navLink: {
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: 600,
    color: "#333",
    transition: "color 0.3s",
  },
  container: {
    maxWidth: "900px",
    margin: "60px auto",
    background: "rgba(255, 240, 245, 0.92)",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(255,182,193,0.3)",
    padding: "40px 50px",
  },
  heading: {
    textAlign: "center",
    fontSize: "34px",
    color: "#ff69b4",
    marginBottom: "10px",
  },
  intro: {
    textAlign: "center",
    color: "#555",
    fontSize: "17px",
    marginBottom: "30px",
  },
  image: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(180,159,217,0.3)",
    marginBottom: "30px",
  },
  blogText: {
    lineHeight: 1.8,
    color: "#444",
  },
  subheading: {
    fontSize: "22px",
    color: "#b49fd9",
    marginTop: "20px",
    marginBottom: "10px",
  },
  para: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  backButton: {
    display: "block",
    margin: "40px auto 10px",
    background: "#ff69b4",
    color: "white",
    border: "none",
    borderRadius: "30px",
    padding: "12px 28px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s, transform 0.3s",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    padding: "20px",
    background: "rgba(255,182,193,0.8)",
    color: "#333",
    fontSize: "14px",
  },
};
