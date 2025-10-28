import React from "react";
import "../styles/Categories.css"; // Optional if you have separate CSS file

const Categories = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-categories">
        <div className="hero-content">
          <h1>Discover Fashion Categories</h1>
          <p>
            Explore curated collections of the latest trends, beauty secrets,
            and style inspiration across all fashion categories.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/1200x/e1/fb/a4/e1fba46c56a1679977a0d3e63cd3459b.jpg"
                alt="Fashion Trends"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Fashion Trends</h3>
              <p className="category-description">
                Stay ahead with the latest runway trends, seasonal must-haves, and
                style predictions that define contemporary fashion.
              </p>
              <div className="category-stats">
                <span className="article-count">150+ Articles</span>
                <a href="#" className="category-tag">Trending</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/736x/18/3b/c7/183bc7bb24fefa2cecbd09d13ea5a031.jpg"
                alt="Beauty & Makeup"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Beauty & Makeup</h3>
              <p className="category-description">
                From skincare routines to makeup tutorials, discover beauty secrets
                and techniques for every occasion.
              </p>
              <div className="category-stats">
                <span className="article-count">120+ Articles</span>
                <a href="#" className="category-tag">Popular</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/736x/f2/35/44/f23544b416a4fa3303c20666b7c43b97.jpg"
                alt="Accessories"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Accessories</h3>
              <p className="category-description">
                Elevate your look with statement jewelry, bags, and fashion-forward
                accessories.
              </p>
              <div className="category-stats">
                <span className="article-count">80+ Articles</span>
                <a href="#" className="category-tag">Editor's Pick</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/1200x/42/c9/de/42c9def3ef73b69ed80712a0fb5c5b91.jpg"
                alt="Footwear"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Footwear</h3>
              <p className="category-description">
                Step into style with the latest shoe trends, from comfortable sneakers
                to elegant heels.
              </p>
              <div className="category-stats">
                <span className="article-count">95+ Articles</span>
                <a href="#" className="category-tag">New</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/736x/d7/0f/4b/d70f4b9b046c8786e10d08a71c45fa99.jpg"
                alt="Sustainable Fashion"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Sustainable Fashion</h3>
              <p className="category-description">
                Eco-friendly fashion choices, ethical brands, and sustainable style
                practices for conscious consumers.
              </p>
              <div className="category-stats">
                <span className="article-count">60+ Articles</span>
                <a href="#" className="category-tag">Eco</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/736x/03/47/ca/0347ca827171bd48ccb3ed244302cdc1.jpg"
                alt="Lifestyle"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Lifestyle</h3>
              <p className="category-description">
                Fashion meets lifestyle with tips on wellness, travel style, and living
                your best fashionable life.
              </p>
              <div className="category-stats">
                <span className="article-count">110+ Articles</span>
                <a href="#" className="category-tag">Inspo</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/736x/95/9c/08/959c080dc00ad3b534eda9b5d3c9373b.jpg"
                alt="Street Style"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Street Style</h3>
              <p className="category-description">
                Discover urban fashion trends, streetwear inspiration, and how to
                master casual chic looks.
              </p>
              <div className="category-stats">
                <span className="article-count">85+ Articles</span>
                <a href="#" className="category-tag">Urban</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="https://i.pinimg.com/1200x/79/13/a4/7913a4cb5b74effc285a35e6e9a9349c.jpg"
                alt="Luxury Fashion"
              />
            </div>
            <div className="category-content">
              <h3 className="category-title">Luxury Fashion</h3>
              <p className="category-description">
                Explore high-end designer collections, luxury brands, and sophisticated
                style for special occasions.
              </p>
              <div className="category-stats">
                <span className="article-count">75+ Articles</span>
                <a href="#" className="category-tag">Exclusive</a>
              </div>
            </div>
          </div>
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
            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://i.pinimg.com/736x/c4/c4/b2/c4c4b2a98dcf3e94c0f4325c47c9252f.jpg"
                  alt="Spring 2024"
                />
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Spring 2024 Fashion Trends</h3>
                <p className="featured-excerpt">
                  Discover the hottest trends that will dominate the fashion scene this
                  spring season.
                </p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://i.pinimg.com/736x/3c/35/3e/3c353e704e32c25d9c165fbbda7d27c4.jpg"
                  alt="Sustainable Fashion Guide"
                />
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Sustainable Fashion Guide</h3>
                <p className="featured-excerpt">
                  Your go-to resource for building a conscious and stylish wardrobe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
