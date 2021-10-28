import React, { useState } from "react";

const ExerciseEntry = ({ onClick }) => {
  const [exercise, setExercise] = useState(60);

  // Used to increment and decrement the exercise input through JSX buttons
  const incrementExercise = () => setExercise((state) => state - 30);
  const decrementExercise = () => setExercise((state) => parseInt(state) + 30);

  return (
    <div>
      <div className="exercise-entry">
        <h1>How Much do You Plan on Exercising?</h1>
        <h4>In Minutes</h4>
        <div>
          <button onClick={incrementExercise}>&lt;</button>
          <input
            type="text"
            onChange={(event) => setExercise(event.target.value)}
            value={exercise}
          />
          <button onClick={decrementExercise}>&gt;</button>
        </div>
        <button onClick={() => onClick(exercise)}>Next</button>
      </div>
    </div>
  );
};

export default ExerciseEntry;
