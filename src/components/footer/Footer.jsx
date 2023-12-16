import React from "react";
import "./Footer.scss";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top_Texting">
        <div className="footer_first">
          <h4 className="footer_top-heading">Trend</h4>
          <h1 className="footer_bottom-heading">Campus</h1>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="icon">
            <FaYoutube />
          </span>
        </div>
      </div>

      <hr />
      <div className="bottom_Texting">
        <div className="infoText">Privacy Policy | Legal</div>
        <div className="infoText">
          Copyright © 2023 Trend Micro Incoprated. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
