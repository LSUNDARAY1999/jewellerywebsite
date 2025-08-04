import React from 'react';

function Contact() {
  return (
    <div className='contact'>

      <div className='contact-left'>
        <h1><span>WHY SHREE JAGANNATH JEWELLERY</span></h1> 
        <p>
          At Shree Jagannath Jewellery, we invite you to experience the magic of jewellery crafted
          with love and precision. With a dedication to perfection, transparent pricing, and personalized customer service, 
          we offer more than just luxury — we offer a relationship built on trust.
        </p>

        <div className='highlights'>
        <div>
          <h2>✓ Exceptional Craftsmanship</h2>
          <p>Each piece at Shree Jagannath is a blend of art and tradition, with a focus on timeless elegance.</p>

          <h3>✓ Honest and Transparent Pricing</h3>
          <p>
            We believe luxury should be accessible, and our clear pricing ensures you get the best without hidden costs.
          </p>
          </div>
          <div className='h-image'><img src="src/assets/0ffer/bangels2.jpg" alt="Bangles" className='bangle-img' /></div>

        </div>
        <a href="/contact">
         <button className="contact-btn">Contact Us</button></a>
      </div>

      <div className='contact-right'>
       
        <img src="src/assets/bride/bride1.avif" alt="Bride" className='bride-img' />
      </div>
    </div>
  )
   
}

export default Contact;