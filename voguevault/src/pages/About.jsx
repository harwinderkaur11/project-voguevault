import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-update footer year
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  const handleTeamClick = (name, bio) => {
    alert(`${name}: ${bio || "No bio available yet."}`);
  };

  return (
    <div className="about-page">
      {/* Header */}
      <header>
        <h1>Vogue Vault</h1>
        <nav>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>
          <a href="/blogs" onClick={(e) => { e.preventDefault(); navigate("/blogs"); }}>Blog</a>
          <a href="/signup" onClick={(e) => { e.preventDefault(); navigate("/signup"); }}>Sign Up</a>
        </nav>
      </header>

      {/* About Section */}
      <div className="about-container">
        <h2>About Vogue Vault</h2>
        <p>
          Welcome to <strong>Vogue Vault</strong> — your ultimate destination for timeless style,
          trend inspiration, and fashion-forward stories. We believe that fashion is more than
          clothing; it’s a reflection of confidence, creativity, and culture.
        </p>
        <p>
          Founded with passion for fashion and storytelling, Vogue Vault blends the latest trends
          with classic elegance. Whether you’re here to discover fresh outfit ideas, explore designer
          highlights, or gain insights into sustainable fashion, we’ve got you covered.
        </p>
        <p>
          Our mission is to build a community where fashion lovers can share inspiration, celebrate
          individuality, and unlock their unique style — because style belongs to everyone.
        </p>

        {/* Team Section */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-members">
            {[
              { img: "team1.jpg", name: "Harshita", roll: "2410991336" },
              { img: "team2.jpg", name: "Harshita Garg", roll: "2410991338" },
              { img: "team3.jpg", name: "Harshita Singla", roll: "2410991339" },
              { img: "team4.jpg", name: "Harwinder Kaur", roll: "2410991340" },
            ].map((member, i) => (
              <div
                key={i}
                className="team-card"
                onClick={() => handleTeamClick(member.name, member.bio)}
              >
                <img src={member.img} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.roll}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        © <span id="year"></span> Vogue Vault | All Rights Reserved
      </footer>
    </div>
  );
}
