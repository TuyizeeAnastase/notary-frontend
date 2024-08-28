import React from 'react';
import '../styles/About.scss';
import companyLogo from '../../images/fidelis.jpg'

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us__content">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing excellent services to our clients. Our team is composed of professionals with extensive experience in the industry. We strive to exceed expectations and deliver outstanding results in everything we do.</p>
        <p>Our mission is to create value for our customers through innovation and exceptional service. We believe in building long-term relationships based on trust, integrity, and mutual respect.</p>
      </div>
      <div className="about-us__image">
        <img src={companyLogo} alt="About Us" />
        <div className="company-name">Our Company</div>
      </div>
    </div>
  );
};

export default About;
