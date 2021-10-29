// Import SDKs
import React, { useState } from "react";

// Import Components
import Waves from "./components/Waves";
import Welcome from "./components/Welcome";
import WeightEntry from "./components/WeightEntry";
import ExerciseEntry from "./components/ExerciseEntry";
import CalculatedWater from "./components/CalculatedWater";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [userInfo, setUserInfo] = useState({ weight: 100, exercise: 60 });

  /*
  Function used to change active component,
  storeing components in a funciton instead of an array to
  follow good codeing practice and improve performance.
  */
  const getComponent = (component) => {
    // eslint-disable-next-line default-case
    switch (component) {
      case 0:
        return <Welcome onClick={welcomeButtonPressed} />;
      case 1:
        return <WeightEntry onClick={weightEntryButtonPressed} />;
      case 2:
        return <ExerciseEntry onClick={exerciseEntryButtonPressed} />;
      case 3:
        const waterConsumption = calculateWaterConsumption(
          userInfo["weight"],
          userInfo["exercise"]
        );
        return <CalculatedWater waterConsumption={waterConsumption} />;
    }
  };

  /*
  Active component function put in a variable to
  allow components to call them on click
  */
  const welcomeButtonPressed = () => setActiveComponent(1);
  const weightEntryButtonPressed = (weight) => {
    setUserInfo((state) => ({ ...state, weight }));
    setActiveComponent(2);
  };
  const exerciseEntryButtonPressed = (exercise) => {
    setUserInfo((state) => ({ ...state, exercise }));
    setActiveComponent(3);
  };

  const calculateWaterConsumption = (weight, exercise) => {
    var waterConsumption = (2 / 3) * weight + (exercise / 30) * 12;
    return Math.round(waterConsumption);
  };

  return (
    <div className="App content">
      {getComponent(activeComponent)}
      <Waves />
    </div>
  );
}

export default App;
