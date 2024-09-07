import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <p>
          For any question, please email me at:
        </p>
        <div className="contact-info">
          <a href="mailto:jeffrey.t.fabella@gmail.com" className="email-link">
            jeffrey.t.fabella@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
