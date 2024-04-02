import React from 'react';
import logo from "./logo.svg";
import langLogo from "./langlogo.svg"; // Assuming you have an SVG file named langlogo.svg

import "./Head.css";

function Head() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="Netflix Logo" />
      <div className='button-container'>
        <select className='lang-selector' name="language" id="language">
          <option value="en" style={{color:"black"}}>
            <img src={langLogo} alt="English Logo" /> English
          </option>
          <option style={{color:"black"}} value="hi"><img src={langLogo} alt="English Logo" />हिन्दी</option>
          {/* Add more language options as needed */}
        </select>
        <button className='signin-btn'>Sign In</button>
      </div>
    </div>
  );
}

export default Head;
