import React from "react";
import { Link } from "react-router-dom";

export default function SavedTrends() {
  const savedTrends = [
    {
      id: 1,
      title: "🌸 Pastel Spring Collection",
      description: "Soft pinks and lavenders dominating the runways this spring.",
    },
    {
      id: 2,
      title: "🖤 Monochrome Magic",
      description: "Black and white chic looks making a strong comeback.",
    },
    {
      id: 3,
      title: "✨ Glitter Glam",
      description: "Shiny sequins and sparkle outfits trending for parties.",
    },
  ];

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
        .container {
          max-width: 900px;
          margin: 50px auto;
          background: white;
          padding: 30px;
          border-radius: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border: 2px solid #ffc0cb;
        }
        h2 {
          color: #ff69b4;
          text-align: center;
          margin-bottom: 30px;
        }
        .trend {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #ffd6e0;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .trend:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .trend h3 {
          margin-bottom: 8px;
          color: #ff69b4;
          font-size: 20px;
        }
        .trend p {
          color: #555;
          font-size: 15px;
        }
        .btn {
          display: inline-block;
          background: #ff69b4;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          text-decoration: none;
          font-size: 14px;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .btn:hover {
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

      <header>💾 Saved Trends</header>

      <div className="container">
        <h2>Your Bookmarked Fashion Trends</h2>

        {savedTrends.map((trend) => (
          <div className="trend" key={trend.id}>
            <h3>{trend.title}</h3>
            <p>{trend.description}</p>
            <Link to={`/trend/${trend.id}`} className="btn">
              👀 View Trend
            </Link>
          </div>
        ))}
      </div>

      <footer>© 2025 Vogue Vault | Saved Trends</footer>
    </>
  );
}
