import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contactbanner">
      <div className="contact-img">
        <img
          className="im"
          src="https://images.unsplash.com/photo-1521247205284-f4f3c95fdb5a?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="form-container">
        <h1 className="contact-heading">Talk To Us</h1>
        <div className="form">
          <div className="form-flex">
            <div>
              <input
                className="contact-input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className="contact-input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-flex">
            <div>
              <input
                className="contact-input"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div>
              <select className="contact-select">
                <option value="">Select Topic</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <button className="contact-submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
