import React from 'react'
import TopBar from "../header/Topbar";
import Navbar from "../header/Navbar";

import Footer from "../Footer";

function NonCasting() {
  return (
<>
<TopBar/>
<Navbar/>
<div className='About-us-i'>
        <img src="src/assets/bride/model4.jpg" alt="About us"/>
      </div>
      <div className='gold22-h' style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "25px", color: 'purple' }}>- OUR  CASTING GOLD COLLECTION -</h1>
        <p >
          Make a statement that,reflects your legacy
        </p></div>
        <div className="machine-img">
        <div>
          <img src="src/assets/bride/22k-bali.jpg" alt="" />
          <p className="m-item">BALI</p>
        </div>
        <div>
          <img src="src/assets/bride/22k-bracelet.jpg" alt="" />
            <p className="m-item">BRACELET</p>
        </div>
        <div>
          <img src="src/assets/bride/22k-haar.webp" alt="" />
           <p className="m-item">HAAR</p>
        </div>
        <div>
          <img src="src/assets/bride/22k-locket.webp" alt="" />
           <p className="m-item">LOCKET</p>
        </div>
        <div>
          <img src="src/assets/bride/24k.pendi.jpg" alt="" />
            <p className="m-item">PENDI</p>
        </div>
        <div>
          <img src="src/assets/bride/non-casting.jpg" alt="" />
           <p className="m-item">RING</p>
        </div>
        <div>
          <img src="src/assets/bride/22K-MangalSutra.jpg" alt="" />
          <p className="m-item">MAGALSUTRA</p>
        </div>
        <div>
          <img src="src/assets/bride/casting.webp" alt="" />
           <p className="m-item">BANGLES</p>
        </div>
        <div>
          <img src="src/assets/bride/22k-redsankha.webp" alt="" />
           <p className="m-item">SANKHA</p>
        </div>
        <div>
          <img src="src/assets/0ffer/neck;ace.jpg" alt="" />
            <p className="m-item">NECKLACE</p>
        </div>
           <div>
          <img src="src/assets/bride/22k-sankha.jpg" alt="" />
            <p className="m-item">CHUR</p>
        </div>
           <div>
          <img src="src/assets/bride/machine.jpg" alt="" />
          <p className="m-item">EARRING</p>
        </div>
        </div>
<Footer/>
</>
  )
}

export default NonCasting
