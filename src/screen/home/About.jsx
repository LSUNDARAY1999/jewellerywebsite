import React from 'react';

function About() {
  return (
    <>
    
      <div className="aboutus">
        <div className="about-images">
          <div className="about-i">
            <img
              src="https://images2.alphacoders.com/853/thumb-1920-853182.jpg"
              alt="Groom Jewellery"
            />
          </div>
          <div className="about-i-2">
            <img
              src="https://i.pinimg.com/originals/aa/4c/6d/aa4c6d0a9a040a0db3234f649a5c879c.jpg"
              alt="Bride Jewellery"
            />
          </div>
        </div>

        <div className="about-text">
          <h1>ABOUT US</h1>
          <h2>A Trusted Legacy in Gold and Silver Jewellery</h2>
          <p>
            Welcome to Shree Ashoka Jewellery, Odisha’s most trusted name in exquisite
            jewelry. We have been crafting memories for decades with timeless gold and
            stunning silver. Our unmatched craftsmanship speaks through our creations.
          </p>
          <ul>
            <li>✔ Craftsmanship that speaks to your heart.</li>
            <li>✔ Transparent pricing for every piece.</li>
            <li>✔ Service that truly understands you.</li>
          </ul>
          <a href="/about">

          <button className="contact-btn">Get in Touch</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;