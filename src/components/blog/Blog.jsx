import React from 'react';
import TopBar from '../header/Topbar';
import Navbar from '../header/Navbar';
import Footer from '../Footer';

function Blog() {
  return (
    <>
      <TopBar />
      <Navbar />

      <div className='About-us-i'>
        <img src="src/assets/bride/model4.jpg" alt="About us" />
      </div>

      <div className="text-center">
        <h1 >OUR BLOG</h1>
      </div>

      <div className="container pb-5">
        <div className="row g-4 justify-content-center">
          {/* Blog 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <img src="src/assets/bride/blog-1.jpg" className="card-img-top" alt="blog1" />
              <div className="card-body">
                <h5 className="card-title">How to Choose Wedding Jewelry</h5>
                <p className="card-text">Wedding jewelry is not just an accessory; it’s a memory that lasts forever...</p>
                <a href="/blog/1" className="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <img src="src/assets/bride/blog-2.jpg" className="card-img-top" alt="blog2" />
              <div className="card-body">
                <h5 className="card-title">18K vs 22K vs 24K Gold</h5>
                <p className="card-text">Know the difference in purity and value between gold types before buying...</p>
                <a href="/blog/2" className="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <img src="src/assets/bride/blog-3.jpg" className="card-img-top" alt="blog3" />
              <div className="card-body">
                <h5 className="card-title">HUID & BIS Hallmarks</h5>
                <p className="card-text">Understand hallmark certifications before your gold shopping...</p>
                <a href="/blog/3" className="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <img src="src/assets/bride/blog-4.jpg" className="card-img-top" alt="blog4" />
              <div className="card-body">
                <h5 className="card-title">Gold Buying Checklist</h5>
                <p className="card-text">A checklist to ensure quality, price and purity when buying gold jewelry...</p>
                <a href="/blog/4" className="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
