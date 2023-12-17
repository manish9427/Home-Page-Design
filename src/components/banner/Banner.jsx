// Banner.jsx

import React from "react";
import "./Banner.scss"; // Import your SCSS file

const Banner = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img
          className="imgg"
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="heroBannerContent">
        <div className="text-content">
          <h2 className="heading">
            Partner <br /> Webinar Series
          </h2>
          <p className="paragraph">Coffee Conversation for Thought Leaders</p>
          <button className="read-more">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
