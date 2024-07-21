import React from "react";
import Carousel from "./Carousel";
import Services from "./Services";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div className="home-banner-container">
      <Carousel/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;