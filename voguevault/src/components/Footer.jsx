import React from "react";
import "../styles/styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h2>Vogue Vault</h2>
        <p>Your stylish destination for fashion, beauty & lifestyle trends.</p>
        <div className="social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733590.png" alt="Pinterest" /></a>
        </div>
        <p className="copyright">&copy; 2025 Vogue Vault | All Rights Reserved</p>
      </div>
    </footer>
  );
}
