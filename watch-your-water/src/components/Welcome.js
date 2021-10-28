import React from "react";

const Welcome = (props) => (
    <div className="welcome">
        <h1 className="welcomeText">Welcome to Watch Your Water!</h1>
        <h3 className="welcomeText">Leading you to a healthier lifestyle one sip at a time</h3>
        <button onClick={props.onClick}>Start</button>
    </div>
);

export default Welcome;