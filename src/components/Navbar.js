import React, { useState } from 'react';
import './Navbar.css'; 


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  // Functie om de staat van het menu te togglen
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
            <img src="/assets/soapbox-logo.svg" alt="Soapbox logo" className="logo-image" /> 
        </a>
        <a href="/" className="navbar-logo-phone">
            <img src="/assets/Group 3638.png" alt="Soapbox logo" className="logo-image" /> 
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#partners" className="nav-links">Partners</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Our services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
        <div className="mobile-nav-button"  onClick={toggleMenu} aria-label='Open navigation'>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      {/* Zijmenu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu} aria-label='Close navigation'>X</button>
        <ul className="nav-options">
          <li><a href="#home"><img src='/assets/soapbox-logo.svg' alt='soapbox logo' /></a></li>
          <li><a href="#Partners">Partners</a></li>
          <li><a href="#Services">Our services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
          <ul className="nav-options account-options">
            <li><a href="#home"><img src='/assets/Group 189.png' alt='SOTB logo' /></a></li>
            <li><a href="#Signup">Sign Up</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;