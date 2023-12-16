import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header_first">
        <h4 className="top-heading">Trend</h4>
        <h1 className="bottom-heading">Campus</h1>
      </div>

      <div className="header_last">
        <div className="header_list">
          <li>The Story</li>
          <li>Flavours</li>
          <li>Upcoming</li>
          <li>On Demand</li>
          <li>FAQs</li>
        </div>
        <button className="header_button">Contact Us</button>
        <div>
          <div>
            <FaSearch className="header_icon" />
          </div>
          <div>
            <img
              src="https://success.trendmicro.com/dcx/resource/1673230946000/DCX_Resource3/DCX_Resource3/images/trend-logo-v4.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
