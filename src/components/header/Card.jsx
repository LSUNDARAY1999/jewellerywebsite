import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './Card.css'; // For animation

function Card() {
  return (
    <div className="container my-5">
      <div className="row" style={{justifyContent:"space-around"}}>
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="custom-card">
            <div className="custom-card-img">
              <img src="src/assets/card/card1.avif" alt="Card 1" />
            </div>
            <div className="custom-card-body">
              <h5>Card Title 1</h5>
              <p>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="custom-card">
            <div className="custom-card-img">
              <img src="src/assets/slider/slider2.jpg" alt="Card 2" />
            </div>
            <div className="custom-card-body" >
              <h5>Card Title 2</h5>
              <p>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>


               <div className="col-md-4">
          <div className="custom-card">
            <div className="custom-card-img">
              <img src="src/assets/card/card2.jpg" alt="Card 2" />
            </div>
            <div className="custom-card-body" >
              <h5>Card Title 2</h5>
              <p>
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
 
        {/* Carousel */}

            {/* <div className="carousel-item">
          <img src="src/assets/banners/banner4.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/banners/banner5.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/banners/banner6.jpg" className="d-block w-100" alt="Slide 4"  />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>  
    </div>
  );
};

export default Card;

