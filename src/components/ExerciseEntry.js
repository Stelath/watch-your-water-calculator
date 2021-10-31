import React, { useState } from "react";
import personRunning from "../assets/images/person-running.svg";
import "../assets/css/form.css";

const ExerciseEntry = ({ onClickBack, onClickNext }) => {
  const [exercise, setExercise] = useState(60);

  // Used to increment and decrement the exercise input through JSX buttons
  const incrementExercise = () => setExercise((state) => state - 30);
  const decrementExercise = () => setExercise((state) => parseInt(state) + 30);

  return (
    <div className="exercise-entry form-content">
      <img className="form-image" src={personRunning} alt="" />
      <h2 className="form-header">How Much do You Plan on Exercising?</h2>
      <h4 className="form-subtext">(In Minutes)</h4>
      <div className="counter-input">
        <button className="text-input-button" onClick={incrementExercise}>
          ❮
        </button>
        <input
          type="text"
          className="text-input"
          onChange={(event) => setExercise(event.target.value)}
          value={exercise}
        />
        <button className="text-input-button" onClick={decrementExercise}>
          ❯
        </button>
      </div>
      <div>
        <button className="back-button" onClick={onClickBack}>
          ❮
        </button>
        <button
          className="continue-button"
          onClick={() => onClickNext(exercise)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExerciseEntry;
