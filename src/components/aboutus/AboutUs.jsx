import React from 'react'
import TopBar from '../header/Topbar'
import Navbar from '../header/Navbar'

import About from '../../screen/home/About'
import { TbBrandCraft } from 'react-icons/tb';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { FaHandHoldingHand } from 'react-icons/fa6'; // ✅ Correct package

import Footer from '../Footer'

function AboutUs() {
  return (
  <>
  
        <TopBar/>
        <Navbar/>
        
        
        <div className='About-us-i'><img src="src/assets/bride/model4.jpg" alt="" /></div>
         <About/>
         
           <div className="promise-cards" style={{marginTop:"50px"}}>
             <div className="promise-card">
               <div className='icon'><span><TbBrandCraft size={40}  /></span></div> <br /><br />
               <h4>Exquisite Craftsmanship</h4>
               <p>Each design reflects our commitment to intricate craftsmanship and timeless beauty.</p>
             </div>
             <div className="promise-card">
              <div className='icon'><span><GiReceiveMoney size={40} />
         </span></div><br /><br />
               <h4>Transparent Pricing</h4>
               <p>Clarity in every transaction—no surprises, just trust.</p>
             </div>
             <div className="promise-card">
               <div className='icon'><span><BsFillEmojiHeartEyesFill size={40} />
         </span></div><br /><br />
               <h4>Personalized Service</h4>
               <p>We tailor your experience to meet your desires, ensuring every visit is memorable.</p>
             </div>
             <div className="promise-card">
                 <div className='icon'><span><FaHandHoldingHand  size={40}/>
         
         </span></div><br /><br />
               <h4>Unwavering Trust</h4>
               <p>Our decades of loyal customers are a testament to our reliability and integrity.</p>
             </div>
           </div>
        
               
        <div className='our-story
        '>
            <div className='our-story-img'><img src="src/assets/bride/model7.webp" alt="" /></div>
            <div className=''> 
                <h1>    OUR STORY  </h1>
                <p>



                Shree Jagannath Jewellery began its journey in the heart of Bhadrak, Odisha, with a simple yet profound goal: to offer more than just jewellery—offer trust, love, and elegance. Over the years, we’ve grown, expanding our presence to Bhubaneswar with our flagship store at Shree Jagannath Jewellery. <br />
                 Throughout this journey, our commitment to purity, honesty, and craftsmanship has never wavered. Today, we continue to be a trusted name, with generations of customers returning for our unmatched quality and service.

As our story unfolded, Shree Jagannath Jewellery’s journey expanded, mirroring the lives and aspirations of the customers we serve. <br /><br />
 We ventured into new locations, introduced fresh designs, and embraced modern craftsmanship—all while staying rooted in tradition and heritage.

Each creation from our house is more than just an accessory—it is a symbol of legacy, blessings, and celebration. Whether it's a wedding, a festival, or a personal milestone, we believe jewellery should speak from the heart and stay timeless. <br />

What sets us apart is our uncompromising focus on quality and transparency. Every piece we design goes through meticulous detailing, blending age-old techniques with contemporary styles. From classic gold collections to trendy silver and diamond jewellery, we offer something for every generation and every occasion.


                </p>
                   </div>
                    </div>
              <div className='story-head'>
  <h1>CATOGORIES BY GENDER</h1>

  <div className='story-image'>

    <div className="gender-card">
      <img src="src/assets/bride/Men's fashion.jpg" alt="" className="card-image" />
      <div className="card-overlay"><h3>MEN'S FASHION</h3></div>
    </div>

    <div className="gender-card">
      <img src="src/assets/bride/Women's fashion.jpg" alt="" className="card-image" />
      <div className="card-overlay"><h3>WOMEN'S FASHION</h3></div>
    </div>

    <div className="gender-card">
      <img src="src/assets/bride/Kid's Boy fashion.jpg" alt="" className="card-image" />
      <div className="card-overlay"><h3>BOY'S FASHION</h3></div>
    </div>

    <div className="gender-card">
      <img src="src/assets/bride/Kid's Girl fashion.jpg" alt="" className="card-image" />
      <div className="card-overlay"><h3>GIRL'S FASHION</h3></div>
    </div>

  </div>
</div>
<div className='our-map'>
<div className='our-video' style={{ textAlign: 'center',display:"flex" ,justifyContent:"space-between",gap:"100px",margin:"50px"}}>
<div>
  <iframe
    width="600px"
    height="508"
    src="https://www.youtube.com/embed/flHOWKbngSg?autoplay=1&mute=1"
    title="Kumari Kandam Collection 2.0 | AVR Swarna Mahal Jewellers | English"
    frameborder="0"
    allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</div>



  <div  style={{ marginTop: '30px' }}>
    <h2 style={{color:'purple'}} >VISIT OUR SHOWROOM</h2>
    <p><strong>Shree Jagannath Jewellery</strong></p>
    <p>KIIT Square, Bhubaneswar, Odisha 751001</p>
    <p>Phone: +91-9876543210</p>

    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7187528475424!2d85.82407247486945!3d20.353234181132418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090025fa395d%3A0xa0bb9741723f8140!2sKIIT%20SQUARE%2C%20PATIA!5e0!3m2!1sen!2sin!4v1753538091590!5m2!1sen!2sin"
        width="700"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
       </div>
  </div>


  {/* <div >
<div style={{display:"flex",flexDirection:"coloumn",margin:"50px"}}>
 <iframe width="344" height="612" src="https://www.youtube.com/embed/9JsTj1Ymi_I" title="LISA | Bulgari Mediterranea High Jewelry Collection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <iframe width="344" height="612" src="https://www.youtube.com/embed/otiVew4iw50" title="bridal choker | চোকর ডিজাইন দূর্গা পূজার নিউ কালেকশন | wedding gold jewellery collection #gold #pc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

  {/* </div> */}
{/* </div> */}





<Footer/>
            
      
      </>
      

  )
}

export default AboutUs;
