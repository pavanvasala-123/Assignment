import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              commodo feugiat facilisis.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>Email: info@example.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
