import React from 'react';
import TopBar from '../header/Topbar';
import Navbar from '../header/Navbar';
import Footer from '../Footer';

function ContactUs() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Banner Image */}
      <div className='About-us-i'>
        <img src="src/assets/bride/model4.jpg" alt="About us"/>
      </div>

      <div className='contact-h' style={{ textAlign: 'center', padding: '20px' }}>
        <h1>CONTACT US</h1>
        <p>Feel free to reach out to us for any inquiries or assistance. We're always here to help.</p>
      </div>

    
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        flexWrap: 'wrap', 
        gap: '30px',
        padding: '20px',
      }}>
       
        <div style={{ flex: '1 1 600px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.718752390575!2d85.82664739999998!3d20.353234200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090025fa395d%3A0xa0bb9741723f8140!2sKIIT%20SQUARE%2C%20PATIA!5e0!3m2!1sen!2sin!4v1753605543373!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="KIIT Square Location"
          ></iframe>
        </div>

        {/* Map 2 */}
        <div style={{ flex: '1 1 600px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238490.35213359553!2d86.65729771640622!3d20.935973500000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1b8500211ed11f%3A0x6e988252da713f89!2sShree%20Jagannath%20jewellers!5e0!3m2!1sen!2sin!4v1753605717767!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Jagannath Jewellers"
          ></iframe>
        </div>
      </div>
      <div>
        <div className='contact-form-container'>
          <form className='contact-from' onSubmit={(e) =>{e.preventDefault();
            alert("Thank you,for visit our website..Our team will soon contact with you")
          }}>
            <div className='form-row'>
              <input type="text"  name="Name" placeholder='Name'/>
              <input type="text" name='Mobile' placeholder='Mobile No'/>
              <input type="text" name="City" placeholder='City' /> </div>

              <div className='form-text'><textarea placeholder='Leave message here'></textarea></div>
              <button type='Submit' className='send-button'>Send Message</button>

           
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
