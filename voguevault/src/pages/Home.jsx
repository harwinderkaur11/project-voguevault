
import "../styles/styles.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
        <section className="hero-home">
        <div className="hero-content">
            <h2>Welcome to Vogue Vault</h2>
            <p>Your stylish destination for fashion, beauty, and lifestyle blogs.</p>
            <a href="/categories">
            <button>Explore Now</button>
            </a>
        </div>
        </section>



      <section className="categories">
        <div><i className="fa-solid fa-star"></i> New Posts</div>
        <div><i className="fa-solid fa-fire"></i> Trending</div>
        <div><i className="fa-solid fa-lightbulb"></i> Tips & Tricks</div>
        <div><i className="fa-solid fa-leaf"></i> Lifestyle</div>
        <div><i className="fa-solid fa-wand-magic-sparkles"></i> Beauty Hacks</div>
      </section>

      <section className="featured">
        <h3>Featured Blogs</h3>
        <div className="blog-grid">
          <div className="blog-card">
            <a href="WardrobeGoals.html">
              <img
                src="https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?q=80&w=687&auto=format"
                alt="Blog 1"
              />
              <h4>Wardrobe Goals</h4>
            </a>
          </div>

          <div className="blog-card">
            <a href="Hairstyles2.html">
              <img
                src="https://media.istockphoto.com/photos/beauty-portrait-hairstyle-picture-id526023845?k=6&m=526023845&s=612x612&w=0&h=Yszqp1HG4_4sRexzcDdhesU9eiIxFPjQ4_gERaR3ouQ="
                alt="Blog 2"
              />
              <h4>Trendy Hairstyles You Must Try</h4>
            </a>
          </div>

          <div className="blog-card">
            <a href="BeautySkincare.html">
              <img
                src="https://www.shankara.in/cdn/shop/articles/13_Skincare_Tips_for_Dry_Skin___From_Cleansing_to_Moisturizing.jpg?v=1726823781"
                alt="Blog 3"
              />
              <h4>Beauty and Skincare</h4>
            </a>
          </div>
        </div>
      </section>

      <section className="scroll-gallery">
        <div className="gallery-item">
          <a href="DesktoDinner.html">
            <img
              src="https://assets.vogue.com/photos/5c9d068cd52c962e43a2b4a2/master/w_2560%2Cc_limit/00-vw-easter-pastels.jpg"
              alt="From Desk to Dinner"
            />
          </a>
          <p>From Desk to Dinner</p>
        </div>

        <div className="gallery-item">
          <a href="MakeupAsthetics.html">
            <img
              src="https://assets.vogue.com/photos/64e6517dbafa7bf543cb3f10/1:1/w_2560,h_2560,c_limit/VO0923_Pastels_01.jpg"
              alt="Makeup Aesthetic"
            />
          </a>
          <p>Makeup Aesthetic</p>
        </div>

        <div className="gallery-item">
          <a href="NailArt.html">
            <img
              src="https://assets.vogue.in/photos/61c04effe519ba5c28e92cc6/1:1/w_1080,h_1080,c_limit/9%20nail%20trends%20to%20try%20this%20winter.jpg"
              alt="Nail Art"
            />
          </a>
          <p>Nail Art</p>
        </div>

        <div className="gallery-item">
          <a href="Accessories.html">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/8142/6241/files/SS24_Accessorize_Sparse_10_118_480x480.jpg?v=1720772886"
              alt="Accessories"
            />
          </a>
          <p>Accessories</p>
        </div>

        <div className="gallery-item">
          <a href="Beauty_Products.html">
            <img
              src="https://i.pinimg.com/736x/24/83/36/248336e4fbcf758fe84fcfcecdbf75e0.jpg"
              alt="Beauty Products"
            />
          </a>
          <p>Beauty Products</p>
        </div>

        <div className="gallery-item">
          <a href="Footwears.html">
            <img
              src="https://bl-i.thgim.com/public/migration_catalog/article18021289.ece/alternates/LANDSCAPE_1200/sbtb29_shoes_LV4.jpg"
              alt="Footwears"
            />
          </a>
          <p>Footwears</p>
        </div>

        <div className="gallery-item">
          <a href="Hairstyles.html">
            <img
              src="https://voguevocal.com/wp-content/uploads/2024/09/Banner.png"
              alt="Hairstyles"
            />
          </a>
          <p>Hairstyles</p>
        </div>
      </section>

      
    </>
  );
}