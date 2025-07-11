import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-left">
      <div class="footer-columns">
        <ul>
          <li>GENERAL INQUIRIES
            <div class="footer-inquiries">
              <a href="mailto:hello@mayank.com">hello@mayank.com</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-bottom-links">
        <p>©COLD EMAIL 2025 · <a href="#">TERMS</a> · <a href="#">PRIVACY</a></p>
        <p>WEBSITE BY <a href="#">MAYANK SINGH</a></p>
      </div>
    </div>

    <div class="footer-headline">
      <h1>COLD EMAIL</h1>
    </div>
  </div>
</footer>




  );
};

export default Footer;
