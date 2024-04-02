import React from "react";
import "./Footer.css"; // Import your CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer bordertop" style={{ color: "white" ,display:"flex",justifyContent:"center",padding:"100px 0 100px 0"}}>
      <div className="container" style={{width:"80%"}}>
        <div className="footer-columns">
          
          <div className="footer-column">
          Questions? Call 000-800-919-1694<br/>
            <ul>   
              <li>
                <a href="" style={{color:"white"}}>FAQ</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Investor Relations</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Privacy</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Speed Test</a>
              </li>
              <div className='button-container'>
        <select className='lang-selector' name="language" id="language" style={{margin:"15px 15px 20px 0px",fontWeight:"900"}}>
          <option value="en" style={{color:"black"}}>
             English
          </option>
          <option style={{color:"black"}} value="hi">हिन्दी</option>
          {/* Add more language options as needed */}
        </select>
      </div>
              <li>Netflix India</li>
            </ul>
          </div>
          <div className="footer-column">
          <br/>
            <ul>
              <li>
                <a href="" style={{color:"white"}}>Help Centre</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Jobs</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Cookie Preferences</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
          <br/>
            <ul>
              <li>
                <a href="" style={{color:"white"}}>Account</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>
                  <li>
                    <a href="" style={{color:"white"}}>Ways to Watch</a>
                  </li>
                </a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Corporate Information</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
          <br/>
            <ul>
              <li>
                <a href="" style={{color:"white"}}>Media Centre</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Terms of Use</a>
              </li>
              <li>
                <a href="" style={{color:"white"}}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
