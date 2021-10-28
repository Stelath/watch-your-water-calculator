import React from "react";

const CalculatedWater = ({ waterConsumption }) => (
    <div className="calculated-water">
      <h1>Your Reccomended Water Consumption:</h1>
      <h2>{waterConsumption} oz</h2>
    </div>
);

export default CalculatedWater