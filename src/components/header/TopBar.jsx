import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";


const TopBar = () => {
  return (
    <section className="top-bar">
      <div className="left">
        <div>
          <span><FaMapMarkerAlt /></span> KIIT SQUARE, PATIA, Bhubaneswar-751042 </div>
        <div>
          <span><FaPhoneAlt /></span> 9437560119
        </div>
        <div>
          <span><BsEnvelope /></span> info@shreejagannath.com
        </div>
      </div>

      <div className="right">
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
    </section>
  );
};

export default TopBar;
