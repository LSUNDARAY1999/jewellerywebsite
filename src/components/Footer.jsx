import React from 'react';
import { Link } from 'react-router-dom';

import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-white pt-5">
      <div className="container">
        <div className="row pb-4 border-bottom">

          {/* Company */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Shree Ashoka Jewellery</h5>
            <p>Discover our beautiful collections, crafted with love and care, perfect for every occasion.</p>
             <div className='f-clickable'>
                    <a href="https://www.facebook.com/jagannathjewelers/" target="_blank" rel="noopener noreferrer">
                      <TiSocialFacebook />
                    </a>
            
                    <a href="https://api.whatsapp.com/send?phone=919437560119" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
            
                    <a href="https://www.instagram.com/jagannath_jewllery/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
            
                    <a href="https://www.youtube.com/results?search_query=sri+jagannath+jewellery" target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </a>
                    
                    <a href="https://www.youtube.com/results?search_query=sri+jagannath+jewellery" target="_blank" rel="noopener noreferrer">
                     <FaLinkedinIn />
            
                    </a>
                  </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/blog" className="text-white text-decoration-none">Our Blog & News</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Products</h6>
            <ul className="list-unstyled">
              <li><Link to="/collection/gold-22k" className="text-white text-decoration-none">22k Gold</Link></li>
              <li><Link to="/collection/gold-18k" className="text-white text-decoration-none">18k Gold</Link></li>
              <li><Link to="/collection/silver" className="text-white text-decoration-none">Silver</Link></li>
              <li><Link to="/collection/sterling-silver" className="text-white text-decoration-none">Sterling Silver 92.5</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4" id="">
            <h6 className="fw-bold">Contact Info</h6>
            <p>PLOT NO - 516/1765/3431, KIIT SQUARE, PATIA,Bhubaneswar - 751024 (KIIT SQUARE)</p>
            <p><a href="mailto:info@jagannath.com" className="text-white text-decoration-none">info@shreejagannath.com</a></p>
            <p><a href="tel:+91943756011" className="text-white text-decoration-none">9437560119</a></p>
          </div>

        </div>

        
        <div className="text-center py-3">
          <p className="mb-0">© ShreeJagannath.com | Design by Addzet</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
