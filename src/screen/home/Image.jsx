import React from 'react'
import { TbBrandCraft } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { FaHandHoldingHand } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';





// 

function Image() {
       const navigate = useNavigate();
  return (
     <>
 

  
    

    <div className='images'>
        <div className='r-image'><img src="src/assets/bride/ban3.jpg" alt="" /></div>
        <div className='l-image'>
        <div><img src="src/assets/bride/neck1.webp" alt="" /></div>
        <div><img src="src/assets/bride/ban2.jpg" alt="" /></div>
        </div>
      </div>
      
      <div  className='image-2'>
      <img src="src/assets/bride/babyhand.webp" alt="" />
      </div>
      
    
      <div className='third-bar'>
        <div><img src="src/assets/gold/ban4.png" alt="" />Bangles</div>
        <div><img src="src/assets/gold/bracelet.png" alt="" />Bracelet</div>
        <div><img src="src/assets/gold/necklace5.webp" alt="" />Necklace</div>
        <div><img src="src/assets/gold/earring.png" alt="" />Earring</div>
        <div><img src="src/assets/gold/anklet.jpg" alt="" />Anklet</div>

      </div>
      <div>
        <div className="promises">
  <h2  style={{textAlign:'center',color:'purple'}}>SHREE JAGANNATH JEWELLERY PROMISES</h2>
  <p style={{textAlign:'center',color:'pink'}}>Our Commitment to You</p>
  

  <div className="promise-cards">
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
</div>
      </div>

      <div className='beauty' >

        <div className='l-beauty'>


        <h1>SOLUTIONS TO YOUR DESIRE FOR BEAUTY</h1>
        <p>
          
           ,each piece is crafted with precision and care Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae molestiae, doloribus nobis iste modi amet doloremque rerum? Modi, veniam, autem aspernatur quo hic ipsam ut recusandae neque blanditiis alias voluptas?
          AT JAGANNATH JEWELLERY,we turn your dreams into reality with our fine craftsmanshio and elegant designs.From timeless wedding oiecece to everyday classics,Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla aut numquam facilis harum. Aliquid, rem vel? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aliquam, magni doloribus sequi maxime cupiditate, iusto cum dolores sint unde a nihil reprehenderit aperiam ducimus, deserunt similique accusamus quam eos? Corrupti, iure. Temporibus assumenda officia voluptates cumque debitis asperiores deserunt cupiditate doloremque et.</p>
           <div className='b-image'>


           <div className='b-i-img'><img src="src/assets/gold/ban7.jpg" alt="" /></div>
           <div className='b-i-img'><img src="src/assets/gold/neck5.jpg" alt="" /></div>
           </div>
        </div>
        <div className='r-beauty'>
          <img src="src/assets/bride/model1.avif" alt="" />
        </div>
        </div>
            <div className="trending-collections">
      <h2>OUR TRENDING COLLECTIONS</h2>
      <p>
        Discover the latest trends at Shree Jagannath Jewellery. From gold to silver, we bring elegance in every piece.
      </p>

      <div className="collection-row">
        <div onClick={() => navigate('/gold/22k')}>
          <img src="src/assets/gold/ban4.png" alt="22K Gold" />
          <h5>22K Gold</h5>
        </div>
        <div onClick={() => navigate('/gold/24k')}>
          <img src="src/assets/gold/necklace4.jpg" alt="18K Gold" />
          <h5>18K Gold</h5>
        </div>
        <div onClick={() => navigate('/silver/pure')}>
          <img src="src/assets/bride/silver9.png" alt="Silver" />
          <h5>Silver</h5>
        </div>
        <div onClick={() => navigate('/silver/sterling')}>
          <img src="src/assets/bride/silver10.png" alt="Sterling Silver" />
          <h5>Sterling Silver</h5>
        </div>
      </div>
    </div>



        
        
    </>
      
  )
}

export default Image;
