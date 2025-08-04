// import PopupForm from "./components/PopupForm";
// import Navbar from "./components/header/Navbar";
// import Slidebar from "./components/header/SlideBar";
// import TopBar from "./components/header/TopBar";
// import SecondBar from "./components/header/SecondBar";


// function App(){
//   return(<>
//    < TopBar/>
//   <PopupForm/>
//   <Navbar/>
//  < Slidebar/>
//  <SecondBar/>

//    </>
// )
// }
// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/home/Home";

import About from "./screen/home/About";
// import Blog from './components/Blog';
// import Contact from './components/Contact';
import Offer from "./components/offerpage/offer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from "./components/aboutus/AboutUs";
import Gold22k from "./components/gold/Gold22k";
import Gold24k from "./components/gold/Gold24k";
import Silver from "./components/silver/Silver";
import SterlingSilver from "./components/silver/SterlingSilver";
import Machine from"./components/gold/Machine";
import Casting from "./components/gold/Casting";
import NonCasting from "./components/gold/NonCasting";

import ContactUs from "./components/contactus/ContactUs";
import Blog from "./components/blog/Blog";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/gold/22k" element={<Gold22k/>}></Route>
        <Route path="/gold/24k" element={<Gold24k/>}></Route>
        <Route path="/silver/pure" element={<Silver/>}></Route>
        <Route path="/silver/sterling" element={<SterlingSilver/>}></Route>
        <Route path="/machine" element={<Machine/>}></Route>
        <Route path="/Casting" element={<Casting/>}></Route>
        <Route path="/Non-casting" element={<NonCasting/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
