import React from "react";
import { useNavigate } from "react-router-dom";

export default function WardrobeGoals() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Wardrobe Goals</h2>
        <p style={styles.intro}>
          Unlock your style potential with wardrobe organization, timeless pieces, and effortless dressing.
        </p>

        <img
          src="https://tse1.explicit.bing.net/th/id/OIP._5Vw6Gig69tYYoBYhseiVwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Wardrobe Goals"
          style={styles.image}
        />

        <div style={styles.blogText}>
          <h3 style={styles.subheading}>1. Capsule Wardrobe</h3>
          <p style={styles.para}>
            Build a collection of timeless basics that can be mixed and matched for any occasion.
          </p>

          <h3 style={styles.subheading}>2. Seasonal Rotation</h3>
          <p style={styles.para}>
            Keep your closet fresh by swapping out clothes each season.
          </p>

          <h3 style={styles.subheading}>3. Accessorize Smartly</h3>
          <p style={styles.para}>
            Elevate your look with minimal but statement accessories.
          </p>

          <h3 style={styles.subheading}>4. Declutter Regularly</h3>
          <p style={styles.para}>
            Stay organized and inspired by keeping only what you truly love and wear.
          </p>

          <h3 style={styles.subheading}>5. Define Your Style</h3>
          <p style={styles.para}>
            Know your colors, fits, and preferences to express your authentic fashion personality.
          </p>
        </div>

        <button style={styles.backButton} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    background:
      "url('https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg') no-repeat center center / cover",
    color: "#333",
    minHeight: "100vh",
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
};
