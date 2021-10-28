import React from "react";

const Welcome = (props) => (
    <div className="welcome">
        <image src=""></image>
        <h1>Welcome to Watch Your Water!</h1>
        <h3>Leading you to a healthier lifestyle one sip at a time</h3>
        <button onClick={props.onClick}>Start</button>
    </div>
);

export default Welcome;