import React from "react";
import "./../pagesStyles/FashionTrends2025.css";

const FashionTrends2025 = () => {
  return (
    <main className="article">
      <img
        src="https://i.pinimg.com/736x/f0/f2/be/f0f2bec7f3536075e14fc6f3380ed3f2.jpg"
        alt="Fashion Trends 2025"
      />
      <div className="article-content">
        <h2>Top 10 Fashion Trends 2025</h2>
        <p>
          Fashion in 2025 is about bold statements, sustainability, and comfort.
          Designers are blending modern minimalism with futuristic elements to
          create versatile looks.
        </p>

        <h3>Here are the top 10 fashion trends shaping 2025:</h3>
        <ul>
          <li><b>Pastel Monochromes</b> – Subtle pastel shades worn head-to-toe.</li>
          <li><b>Eco-friendly Materials</b> – Organic fabrics, recycled textiles, and sustainable fashion brands.</li>
          <li><b>Oversized Streetwear</b> – Baggy jackets, loose trousers, and comfy hoodies.</li>
          <li><b>Metallic Fabrics</b> – Futuristic silver and gold tones on dresses, jackets, and skirts.</li>
          <li><b>Luxury Minimalism</b> – Simple but classy designs with premium fabrics.</li>
          <li><b>Sheer Layers</b> – Transparent outfits paired with bold innerwear.</li>
          <li><b>Chunky Accessories</b> – Big statement jewelry and oversized handbags.</li>
          <li><b>Techwear</b> – Clothes with integrated gadgets and futuristic designs.</li>
          <li><b>Gender-neutral Fashion</b> – Breaking boundaries with unisex outfits.</li>
          <li><b>Vintage Revival</b> – 90s-inspired looks making a modern comeback.</li>
        </ul>

        <p>
          2025 proves that fashion is no longer just about style—it’s about identity,
          sustainability, and bold experimentation. Expect to see these trends
          everywhere, from runways to everyday streetwear.
        </p>

        <a href="/categories" className="back-btn">← Back to Categories</a>
      </div>
    </main>
  );
};

export default FashionTrends2025;
