import React from "react";
import "./Footer.css";
import SMLogo from "../SmLogo/SMLogo";


const Footer = () => {
  return (
    <footer className="footer">
      <p id="footer-tag">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>

      <div className="footer-info">
        <div className="contact-group">
          <div className="contact-item">
            <h4>Call</h4>
            <br />
            <p>+905523911957</p>
          </div>
          <div className="contact-item">
            <h4>Write</h4>
            <a href="mailto:gholam2015m@gmail.com" className="email-link">
              gholam2015m@gmail.com
            </a>
          </div>
        </div>

        <div className="follow">
          <h4>Follow</h4>
          <div className="social-links">
            <a href="#">
              <SMLogo img="/images/youtub.png" alt="Facebook" />
            </a>
            <a href="https://x.com/reza19184310">
              <SMLogo img="/images/x.png" alt="X" />
            </a>
            <a href="https://www.linkedin.com/in/reza-amiri-4362b8335/">
              <SMLogo img="/images/linkden.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <SMLogo img="/images/insta.png" alt="Instagram" />
            </a>
            <a href="https://x.com/reza19184310">
              <SMLogo img="/images/wats.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
