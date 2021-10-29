import React, { useState } from "react";
import '../assets/css/form.css';

const ExerciseEntry = ({ onClick }) => {
  const [exercise, setExercise] = useState(60);

  // Used to increment and decrement the exercise input through JSX buttons
  const incrementExercise = () => setExercise((state) => state - 30);
  const decrementExercise = () => setExercise((state) => parseInt(state) + 30);

  return (
    <div>
      <div className="exercise-entry form-content">
        <h2 className="form-header">How Much do You Plan on Exercising?</h2>
        <h4 className="form-subtext">(In Minutes)</h4>
        <div>
          <button onClick={incrementExercise}>&lt;</button>
          <input
            type="text"
            onChange={(event) => setExercise(event.target.value)}
            value={exercise}
          />
          <button onClick={decrementExercise}>&gt;</button>
        </div>
        <button className="continue-button" onClick={() => onClick(exercise)}>Next</button>
      </div>
    </div>
  );
};

export default ExerciseEntry;
