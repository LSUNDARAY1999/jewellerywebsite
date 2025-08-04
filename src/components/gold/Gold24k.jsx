import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../header/Topbar';
import Navbar from '../header/Navbar';

import model4 from '../../assets/bride/model4.jpg';
import machine from '../../assets/bride/machine.jpg';
import casting from '../../assets/bride/casting.webp';
import nonCasting from '../../assets/bride/non-casting.jpg';
import Footer from '../Footer';

function Gold24k() {
  return (
    <>
      <TopBar />
      <Navbar />

      <div className='gold22-img'>
        <img src={model4} alt="Model" />
      </div>
     

      <div className='gold22-h' style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "25px", color: 'purple' }}>- OUR 18K GOLD COLLECTION -</h1>
        <p>
          Make a statement that reflects your legacy with our stunning 18k gold pieces. <br />
          Each piece is designed to leave a lasting impression.
        </p>
      </div>

      <div className='gold22-image' style={{gap:"15px"}}>
      <Link to="/machine">
        <div className='m-img'><img src={machine} alt="Machine" style={{marginLeft:"0px"}}/>
        <div className='m-text'>MACHINE</div></div></Link>
          <Link to="/Casting">
        <div className='c-img'><img src={casting} alt="Casting" style={{marginLeft:"0px"}} />
        <div className='c-text'>CASTING</div></div></Link>
       <Link to="/Non-casting">
        <div className='n-img'> <img src={nonCasting} alt="Non-Casting" style={{marginLeft:"0px"}}/>
        <div className='n-text'>NON-CASTING</div></div></Link>
      </div>

      <Footer />
    </>
  );
}

export default Gold24k;
