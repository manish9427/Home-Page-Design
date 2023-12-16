// Banner.jsx

import React from "react";
import "./Banner.scss"; // Import your SCSS file

const Banner = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img
          className="imgg"
          src="https://image.tmdb.org/t/p/original/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg"
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
