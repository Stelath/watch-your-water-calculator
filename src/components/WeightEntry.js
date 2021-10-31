import React, { useState } from "react";
import scale from "../assets/images/scale.svg";
import "../assets/css/form.css";

const WeightEntry = ({ onClickBack, onClickNext }) => {
  const [weight, setWeight] = useState(100);

  // Used to increment and decrement the weight input through JSX buttons
  const incrementWeight = () => setWeight((state) => state - 1);
  const decrementWeight = () => setWeight((state) => parseInt(state) + 1);

  return (
    <div className="weight-entry form-content">
      <img className="form-image" src={scale} alt="" />
      <h2 className="form-header">Please Enter Your Weight</h2>
      <h4 className="form-subtext">(In Pounds)</h4>
      <div className="counter-input">
        <button className="text-input-button" onClick={incrementWeight}>
          ❮
        </button>
        <input
          type="text"
          className="text-input"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
        />
        <button className="text-input-button" onClick={decrementWeight}>
          ❯
        </button>
      </div>
      <div>
        <button className="back-button" onClick={onClickBack}>
          ❮
        </button>
        <button className="continue-button" onClick={() => onClickNext(weight)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default WeightEntry;
