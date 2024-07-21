import React from 'react';
import '../styles/Footer.scss';
import facebookIcon from '../../images/facebook.jpeg'
import twitterIcon from '../../images/twitter.png'
import instagramIcon from '../../images/instagram.png'
import linkedinIcon from '../../images/linkedin.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to [Company Name], your number one source for all things [product/service]. We're dedicated to giving you the very best of [product/service], with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="/#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="/#"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="/#"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="/#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 [Company Name]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
