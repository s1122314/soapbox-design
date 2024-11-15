import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-extra-mobile">
        <div className="extra-content-mobile">
          <img src='/assets/Group 3638.png' className='footer-logo' alt='Soapbox logo' />
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-icons">
          <div className="social-icon">
            <img src='/assets/Icon simple-tiktok.png' className='socials-logo' alt='Tiktok logo' />
          </div>
          <div className="social-icon">
            <img src='/assets/Icon awesome-instagram.png' className='socials-logo' alt='Instagram logo' />
          </div>
          <div className="social-icon">
            <img src='/assets/Icon awesome-linkedin-in.png' className='socials-logo' alt='Linkedin logo' />
          </div>
          <div className="social-icon">
            <img src='/assets/Icon awesome-youtube.png' className='socials-logo' alt='YouTube logo' />
          </div>
        </div>

        <div className="footer-extra">
          <div className="extra-content">
            <img src='/assets/Group 3638.png' className='footer-logo' alt='Soapbox logo' />
          </div>
        </div>
            
        <hr className="footer-line" />

        <div className="footer-columns">
          
          <div className="footer-column">
            <h4>SOAPBOX</h4>
            <ul>
              <li><a href="#talent">&#9654; Challenges</a></li>
              <li><a href="#talent">&#9654; Talent</a></li>
              <li><a href="#agency">&#9654; Agency</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="#offices">&#9654; Our Offices</a></li>
              <li><a href="#story">&#9654; Our Story</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>LEGAL INFORMATION</h4>
            <ul>
              <li><a href="#terms">&#9654; Terms & Conditions</a></li>
              <li><a href="#privacy">&#9654; Privacy Statement</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;