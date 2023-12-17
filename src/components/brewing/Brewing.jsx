import React from "react";
import "./Brewing.scss";

const Brewing = () => {
  return (
    <div className="brewing">
      <h1>Brewing Success</h1>
      <h2>Partner Testimonials that Perk us up!</h2>
      <img
        className="brewing-img"
        src="https://static.vecteezy.com/system/resources/previews/009/970/461/original/eps10-red-quotation-mark-icon-isolated-on-white-background-double-quotes-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-ui-pictogram-and-mobile-application-vector.jpg"
        alt="f"
      />
      <h4>
        "A cup of Coffee is an excuse to share great thoughts with great minds"
      </h4>
      <h3>
        John Doe <br /> Company
      </h3>
    </div>
  );
};

export default Brewing;
