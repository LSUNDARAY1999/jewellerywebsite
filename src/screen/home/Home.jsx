// import PopupForm from "./components/PopupForm";
import TopBar from "../../components/header/Topbar";
import PopupForm from "../../components/PopupForm";
import Navbar from "../../components/header/Navbar";

import Slidebar from "../../components/header/SlideBar";
import SecondBar from "../../components/header/SecondBar";
import About from "./About";
import Card from "../../components/header/Card";
import Contact from "./contact";
import Image from "./Image";
// import Collection from "./Collection";

import Footer from "../../components/Footer";




function Home(){
  return(<>
   < TopBar/>
  <PopupForm/>
  <Navbar/>
 < Slidebar/>
 <SecondBar/>
 <About/>
 <Card/>
 <Contact/>

 <Image/>
 <Footer/>
 {/* <Collection/> */}


   </>
)
}
export default Home;