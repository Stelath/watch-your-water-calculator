import React from "react";
import "../assets/css/calculated-water.css";

const CalculatedWater = ({ weight, exercise, onClickRestart }) => {
  const calculateWaterConsumption = (weight, exercise) => {
    var waterConsumption = (2 / 3) * weight + (exercise / 30) * 12;
    return Math.round(waterConsumption);
  };

  const waterConsumption = calculateWaterConsumption(weight, exercise);

  return (
    <div className="calculated-water-content">
      <h3 className="calculated-water-text">Recommended Water Consumption:</h3>
      <div className="consumption-container">
        <span className="consumption">{waterConsumption}</span>
        <span className="units"> Ounces/Day</span>
      </div>
      <button className="continue-button" onClick={onClickRestart}>
        Restart
      </button>
      <button
        className="continue-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://watchyourwater.org";
        }}
        style={{ marginLeft: "10px" }}
      >
        Go to Water Tracking Website!
      </button>
    </div>
  );
};

export default CalculatedWater;
