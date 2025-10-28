import React from "react";
import { useNavigate } from "react-router-dom";

export default function TrendyHairstyles() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Trendy Hairstyles</h2>
        <p style={styles.intro}>
          Discover the latest hairstyles that define confidence, elegance, and modern beauty.
        </p>

        <img
          src="https://images-static.naikaa.com/beauty-blog/wp-content/uploads/2024/10/9-haircuts-hairstyles-banner.jpg"
          alt="Trendy Hairstyles"
          style={styles.image}
        />

        <div style={styles.blogText}>
          <h3 style={styles.subheading}>1. Sleek Straight Hair</h3>
          <p style={styles.para}>
            A timeless look that suits all occasions. Use a straightener and shine serum for a polished finish.
          </p>

          <h3 style={styles.subheading}>2. Beach Waves</h3>
          <p style={styles.para}>
            Get effortless waves with a curling wand or overnight braids for a chic and carefree vibe.
          </p>

          <h3 style={styles.subheading}>3. Braided Styles</h3>
          <p style={styles.para}>
            Try fishtail or French braids — perfect for both casual outings and festive occasions.
          </p>

          <h3 style={styles.subheading}>4. Messy Bun</h3>
          <p style={styles.para}>
            A quick go-to hairstyle that combines comfort and effortless style.
          </p>

          <h3 style={styles.subheading}>5. Ponytail Glam</h3>
          <p style={styles.para}>
            High or low — ponytails never go out of style. Add a hair accessory for a modern touch.
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
