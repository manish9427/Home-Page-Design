import React from "react";
import "./Home.scss";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <div className="home_main">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
