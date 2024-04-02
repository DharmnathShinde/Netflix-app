import React from "react";
import "../App.css";
import Head from "./Head";
import Enjoy from "./Enjoy";
import Download from "./Download";
import Watch from "./Watch";
import Children from "./Children";
import Footer from "./Footer";

function Singup() {
  return (
    <div>
      <div className="background ">
        <Head />
        <div className="centeroffer" style={{ lineHeight: "1.2" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "white" }}>
            Unlimited movies, TV shows and more
          </h1>
          <h3 style={{ fontSize: "2rem", fontWeight: "600", color: "white" }}>
            Watch anywhere. Cancel anytime.
          </h3>
          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              lineHeight: "1.5",
              color: "white",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <input
            id="email"
            className="email"
            type="email"
            placeholder="Email address"
          />
          <button className="Getstart">Get Started > </button>
        </div>
      </div>
      <Enjoy/>
      <Download/>
      <Watch/>
      <Children/>
      <Footer/>
    </div>
  );
}

export default Singup;
