import React from "react";
import "../styles/Categories.css"; // Optional if you move CSS to external file

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
        <div className="section-header">
          <h2 className="section-title">Fashion Categories</h2>
          <p className="section-subtitle">
            Dive into our comprehensive collection of fashion content, from runway
            trends to sustainable style
          </p>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/1200x/e1/fb/a4/e1fba46c56a1679977a0d3e63cd3459b.jpg" alt="Fashion Trends" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Fashion Trends</h3>
              <p className="category-description">
                Stay ahead with the latest runway trends, seasonal must-haves, and
                style predictions that define contemporary fashion.
              </p>
              <div className="category-stats">
                <span className="article-count">150+ Articles</span>
                <a href="blog1.html" className="category-tag">Trending</a>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/736x/8b/30/f5/8b30f59ca33eaed3db75185f5cd43ef7.jpg" alt="Beauty & Makeup" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Beauty & Makeup</h3>
              <p className="category-description">
                From skincare routines to makeup tutorials, discover beauty secrets
                and techniques for every occasion.
              </p>
              <div className="category-stats">
                <span className="article-count">120+ Articles</span>
                <span className="category-tag">Popular</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/1200x/dd/54/94/dd5494fd27b454f9c4586739e5ef7921.jpg" alt="Accessories" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Accessories</h3>
              <p className="category-description">
                Complete your look with the perfect accessories - from statement
                jewelry to designer handbags.
              </p>
              <div className="category-stats">
                <span className="article-count">80+ Articles</span>
                <span className="category-tag">New</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/1200x/3d/98/92/3d98923911013f8832055b5cdb6ab6c8.jpg" alt="Footwear" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Footwear</h3>
              <p className="category-description">
                Step into style with the latest shoe trends, from comfortable sneakers
                to elegant heels.
              </p>
              <div className="category-stats">
                <span className="article-count">95+ Articles</span>
                <span className="category-tag">Hot</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/736x/3f/85/56/3f8556dc536885d6ea02ccfd6fe97772.jpg" alt="Sustainable Fashion" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Sustainable Fashion</h3>
              <p className="category-description">
                Eco-friendly fashion choices, ethical brands, and sustainable style
                practices for conscious consumers.
              </p>
              <div className="category-stats">
                <span className="article-count">60+ Articles</span>
                <span className="category-tag">Eco</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/1200x/34/7a/ec/347aec6edde49ee408d8a561e38d416b.jpg" alt="Lifestyle" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Lifestyle</h3>
              <p className="category-description">
                Fashion meets lifestyle with tips on wellness, travel style, and living
                your best fashionable life.
              </p>
              <div className="category-stats">
                <span className="article-count">110+ Articles</span>
                <span className="category-tag">Lifestyle</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/736x/15/60/a2/1560a26a5d1f7295eb34414124707ecd.jpg" alt="Street Style" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Street Style</h3>
              <p className="category-description">
                Discover urban fashion trends, streetwear inspiration, and how to
                master casual chic looks.
              </p>
              <div className="category-stats">
                <span className="article-count">85+ Articles</span>
                <span className="category-tag">Urban</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://i.pinimg.com/736x/81/de/da/81dedafeb62fe5806b507babf88f5c23.jpg" alt="Luxury Fashion" />
            </div>
            <div className="category-content">
              <h3 className="category-title">Luxury Fashion</h3>
              <p className="category-description">
                Explore high-end designer collections, luxury brands, and sophisticated
                style for special occasions.
              </p>
              <div className="category-stats">
                <span className="article-count">75+ Articles</span>
                <span className="category-tag">Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">
              Handpicked content that's making waves in the fashion world
            </p>
          </div>

          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-image">
                <img src="https://i.pinimg.com/736x/c4/c4/b2/c4c4b2a98dcf3e94c0f4325c47c9252f.jpg" alt="Spring 2024" />
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
                <img src="https://i.pinimg.com/736x/3c/35/3e/3c353e704e32c25d9c165fbbda7d27c4.jpg" alt="Sustainable Fashion Guide" />
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Sustainable Fashion Guide</h3>
                <p className="featured-excerpt">
                  How to build an eco-friendly wardrobe without compromising on style.
                </p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img src="https://i.pinimg.com/736x/cc/93/29/cc93291fa1510311b4275130ccca8dcb.jpg" alt="Celebrity Style" />
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Celebrity Style Breakdown</h3>
                <p className="featured-excerpt">
                  Analyzing the best red carpet looks from this year's award season.
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