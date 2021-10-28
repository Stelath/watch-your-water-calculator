import React, { useState } from "react";

const WeightEntry = ({ onClick }) => {
  const [weight, setWeight] = useState(100);

  // Used to increment and decrement the weight input through JSX buttons
  const incrementWeight = () => setWeight((state) => state - 1);
  const decrementWeight = () => setWeight((state) => parseInt(state) + 1);

  return (
    <div className="weight-entry">
      <h1>Please Enter Your Weight</h1>
      <h4>In Pounds</h4>
      <div>
        <button onClick={incrementWeight}>&lt;</button>
        <input
          type="text"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
        />
        <button onClick={decrementWeight}>&gt;</button>
      </div>
      <button onClick={() => onClick(weight)}>Next</button>
    </div>
  );
};

export default WeightEntry;
