import React from "react";
import "../assets/css/welcome.css";

const Welcome = ({ onClickStart }) => (
  <div className="welcome-content">
    <h1 className="welcome-text">WATCH YOUR WATER</h1>
    <h3 className="welcome-subtext">
      Leading you to a Healthier Lifestyle one sip at a Time
    </h3>
    <button className="continue-button" onClick={onClickStart}>
      Start
    </button>
  </div>
);

export default Welcome;
