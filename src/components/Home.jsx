import React from "react";
import "./Home.scss";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Coffee from "./coffee/Coffee";
import ContactForm from "./contactForm/ContactForm";
import Brewing from "./brewing/Brewing";
const Home = () => {
  return (
    <div className="home_main">
      <Header />
      <Banner />
      {/* <Coffee /> */}
      <Brewing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
