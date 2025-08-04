import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';




const Slidebar = () => {
  const Navigate = useNavigate();
  const handleClick = () => { Navigate('/offer'); };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/assets/banners/banner2.webp" className="d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
           <div className="carousel-caption custom-caption text-start" onClick={handleClick}>
    <h2>BIG Brilliance Sale</h2>
    <p>FLAT <span>30%</span> OFF</p>
    <small>on 24k gold prices of special designs</small>
  </div>

          <h1 className='slogan-o'>EVERY PIECE, A PROMISE OF FOREVER</h1>
       
        </div>
        <div className="carousel-item">
          <img src="src/assets/banners/banner4.jpg" className="d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src="src/assets/banners/banner5.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img src="src/assets/banners/banner6.jpg" className="d-block w-100" alt="Slide 4" style={{ height: '500px', objectFit: 'cover' }} />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slidebar;
