import React, { useEffect, useState } from "react";
// import "./PopupForm.css";



function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => {
        setVisible(true);
      }, 3000); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShowPopup(false), 300); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, mobile, city, message });
    alert("Message Sent!");
    handleClose();
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-box ${visible ? "visible" : ""}`}>
          <span className="close-btn" onClick={handleClose}>
            &times;
            
          </span>
          <h2>Please Fill Out The Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile No"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message here"
              rows={3}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
  );
}

export default PopupForm;