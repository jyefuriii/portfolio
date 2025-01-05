import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <p>For any questions or opportunities, please email me:</p>
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
