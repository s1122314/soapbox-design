import React from 'react';
import './Account.css'; 

const Account = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-right">
          <button className="nav-button">Sign up</button>
          <button className="nav-button">Log In</button>
          <img src="/assets/Group 189.png" alt="Logo" className="nav-logo" />
        </div>
      </nav>
    </div>
  );
};

export default Account;