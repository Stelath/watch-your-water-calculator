import React, { useState } from "react";
import "../assets/css/form.css";
import scale from "../assets/images/scale.svg";

const WeightEntry = ({ onClick }) => {
  const [weight, setWeight] = useState(100);

  // Used to increment and decrement the weight input through JSX buttons
  const incrementWeight = () => setWeight((state) => state - 1);
  const decrementWeight = () => setWeight((state) => parseInt(state) + 1);

  return (
    <div className="weight-entry form-content">
      <img src={scale} alt="" />
      <h2 className="form-header">Please Enter Your Weight</h2>
      <h4 className="form-subtext">(In Pounds)</h4>
      <div>
        <button onClick={incrementWeight}>&lt;</button>
        <input
          type="text"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
        />
        <button onClick={decrementWeight}>&gt;</button>
      </div>
      <button className="continue-button" onClick={() => onClick(weight)}>
        Next
      </button>
    </div>
  );
};

export default WeightEntry;
