import React, { useEffect } from "react";
import "../styles/About.css"; // make sure this CSS file exists in /src/styles

const About = () => {
  useEffect(() => {
    // 1️⃣ Smooth scroll for nav links
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // 2️⃣ Click on team card to show bio
    document.querySelectorAll(".team-card").forEach((card) => {
      card.addEventListener("click", function () {
        const bio = this.getAttribute("data-bio");
        alert(`${this.querySelector("h4").innerText}: ${bio}`);
      });
    });

    // 3️⃣ Auto update footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      
      {/* About Section */}
      <div className="about-container">
        <h2>About Vogue Vault</h2>
        <p>
          Welcome to <strong>Vogue Vault</strong> — your ultimate destination
          for timeless style, trend inspiration, and fashion-forward stories.
          We believe that fashion is more than clothing; it’s a reflection of
          confidence, creativity, and culture.
        </p>
        <p>
          Founded with passion for fashion and storytelling, Vogue Vault blends
          the latest trends with classic elegance. Whether you’re here to
          discover fresh outfit ideas, explore designer highlights, or gain
          insights into sustainable fashion, we’ve got you covered.
        </p>
        <p>
          Our mission is to build a community where fashion lovers can share
          inspiration, celebrate individuality, and unlock their unique style —
          because style belongs to everyone.
        </p>

        {/* Team Section */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-members">
            <div className="team-card" data-bio="">
              <img src="team1.jpg" alt="Harshita" />
              <h4>Harshita</h4>
              <p>2410991336</p>
            </div>
            <div className="team-card" data-bio="">
              <img src="team2.jpg" alt="Harshita Garg" />
              <h4>Harshita Garg</h4>
              <p>2410991338</p>
            </div>
            <div className="team-card" data-bio="">
              <img src="team3.jpg" alt="Harshita Singla" />
              <h4>Harshita Singla</h4>
              <p>2410991339</p>
            </div>
            <div className="team-card" data-bio="">
              <img src="team4.jpg" alt="Harwinder Kaur" />
              <h4>Harwinder Kaur</h4>
              <p>2410991340</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        © <span id="year"></span> Vogue Vault | All Rights Reserved
      </footer>
    </>
  );
};

export default About;
