import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import "./styles/styles.css";

export default function App() {
  return (
    <>
      {/* Header visible on all pages */}
      <header>
        <h1>Vogue Vault</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>




          </ul>
        </nav>
      </header>

      {/* Page content changes dynamically */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>


      {/* Footer visible on all pages */}
     <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-brand">Vogue Vault</h2>
          <p className="footer-tagline">
            Your stylish destination for fashion, beauty & lifestyle trends.
          </p>

          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733590.png" alt="Pinterest" /></a>
          </div>
          <p className="copyright">
            &copy; 2025 Vogue Vault | All Rights Reserved
          </p>
          </div>
          </footer>
          </>
  )}