import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const Categories = () => {
 
  const [categories, setCategories] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const categoryData = [
      {
        title: "Fashion Trends",
        img: "https://i.pinimg.com/1200x/a1/c2/22/a1c22235209bb61a87ba9ab401e261dc.jpg",
        desc: "Stay ahead with the latest runway trends, seasonal must-haves, and style predictions that define contemporary fashion.",
        count: "150+ Articles",
        tag: "Trending",
        link: "/fashion-trends-2025",
      },
      {
        title: "Beauty & Makeup",
        img: "https://i.pinimg.com/736x/18/3b/c7/183bc7bb24fefa2cecbd09d13ea5a031.jpg",
        desc: "From skincare routines to makeup tutorials, discover beauty secrets and techniques for every occasion.",
        count: "120+ Articles",
        tag: "Popular",
      },
      {
        title: "Accessories",
        img: "https://i.pinimg.com/736x/f2/35/44/f23544b416a4fa3303c20666b7c43b97.jpg",
        desc: "Elevate your look with statement jewelry, bags, and fashion-forward accessories.",
        count: "80+ Articles",
        tag: "Editor's Pick",
      },
      {
        title: "Footwear",
        img: "https://i.pinimg.com/1200x/42/c9/de/42c9def3ef73b69ed80712a0fb5c5b91.jpg",
        desc: "Step into style with the latest shoe trends, from comfortable sneakers to elegant heels.",
        count: "95+ Articles",
        tag: "New",
      },
      {
        title: "Sustainable Fashion",
        img: "https://i.pinimg.com/736x/d7/0f/4b/d70f4b9b046c8786e10d08a71c45fa99.jpg",
        desc: "Eco-friendly fashion choices, ethical brands, and sustainable style practices for conscious consumers.",
        count: "60+ Articles",
        tag: "Eco",
      },
      {
        title: "Lifestyle",
        img: "https://i.pinimg.com/736x/03/47/ca/0347ca827171bd48ccb3ed244302cdc1.jpg",
        desc: "Fashion meets lifestyle with tips on wellness, travel style, and living your best fashionable life.",
        count: "110+ Articles",
        tag: "Inspo",
      },
      {
        title: "Street Style",
        img: "https://i.pinimg.com/736x/95/9c/08/959c080dc00ad3b534eda9b5d3c9373b.jpg",
        desc: "Discover urban fashion trends, streetwear inspiration, and how to master casual chic looks.",
        count: "85+ Articles",
        tag: "Urban",
      },
      {
        title: "Luxury Fashion",
        img: "https://i.pinimg.com/1200x/79/13/a4/7913a4cb5b74effc285a35e6e9a9349c.jpg",
        desc: "Explore high-end designer collections, luxury brands, and sophisticated style for special occasions.",
        count: "75+ Articles",
        tag: "Exclusive",
      },
    ];

    const featuredData = [
      {
        title: "Spring 2024 Fashion Trends",
        img: "https://i.pinimg.com/736x/c4/c4/b2/c4c4b2a98dcf3e94c0f4325c47c9252f.jpg",
        desc: "Discover the hottest trends that will dominate the fashion scene this spring season.",
      },
      {
        title: "Sustainable Fashion Guide",
        img: "https://i.pinimg.com/736x/3c/35/3e/3c353e704e32c25d9c165fbbda7d27c4.jpg",
        desc: "Your go-to resource for building a conscious and stylish wardrobe.",
      },
    ];

    setCategories(categoryData);
    setFeaturedArticles(featuredData);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-categories">
        <div className="hero-content">
          <h1>Discover Fashion Categories</h1>
          <p>
            Explore curated collections of the latest trends, beauty secrets, and style inspiration across all fashion categories.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="category-image">
                <img src={cat.img} alt={cat.title} />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-description">{cat.desc}</p>
                <div className="category-stats">
                  <span className="article-count">{cat.count}</span>
                  {cat.link ? (
                    <Link to={cat.link} className="category-tag">
                      {cat.tag}
                    </Link>
                  ) : (
                    <a href="#" className="category-tag">
                      {cat.tag}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="section-header">
            <h2>Featured Articles</h2>
            <p>Our editor’s top picks for you</p>
          </div>

          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <div key={index} className="featured-card">
                <div className="featured-image">
                  <img src={article.img} alt={article.title} />
                </div>
                <div className="featured-content">
                  <h3 className="featured-title">{article.title}</h3>
                  <p className="featured-excerpt">{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
