// Import SDKs
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// Import Styles
import "./assets/css/transitions.css";

// Import Components
import Waves from "./components/Waves";
import Welcome from "./components/Welcome";
import WeightEntry from "./components/WeightEntry";
import ExerciseEntry from "./components/ExerciseEntry";
import CalculatedWater from "./components/CalculatedWater";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [activeFormAnimation, setActiveFormAnimation] =
    useState("form-forward");
  const [userInfo, setUserInfo] = useState({ weight: 100, exercise: 60 });

  /*
  Active component function put in a variable to
  allow components to call them on click
  */
  const backButtonPressed = () => {
    setActiveFormAnimation("form-backward");
    setActiveComponent((state) => state - 1);
    setTimeout(() => {setActiveFormAnimation("form-forward")}, 1000);
  };
  const restartButtonPressed = () => setActiveComponent(0);
  const welcomeButtonPressed = () => setActiveComponent(1);
  const weightEntryButtonPressed = (weight) => {
    setUserInfo((state) => ({ ...state, weight }));
    setActiveComponent(2);
  };
  const exerciseEntryButtonPressed = (exercise) => {
    setUserInfo((state) => ({ ...state, exercise }));
    setActiveComponent(3);
  };

  return (
    <div className="App">
      <CSSTransition
        in={activeComponent === 0}
        unmountOnExit
        timeout={500}
        classNames={activeFormAnimation}
      >
        <Welcome onClickStart={welcomeButtonPressed} />
      </CSSTransition>
      <CSSTransition
        in={activeComponent === 1}
        unmountOnExit
        timeout={500}
        classNames={activeFormAnimation}
      >
        <WeightEntry
          onClickBack={backButtonPressed}
          onClickNext={weightEntryButtonPressed}
        />
      </CSSTransition>
      <CSSTransition
        in={activeComponent === 2}
        unmountOnExit
        timeout={500}
        classNames={activeFormAnimation}
      >
        <ExerciseEntry
          onClickBack={backButtonPressed}
          onClickNext={exerciseEntryButtonPressed}
        />
      </CSSTransition>
      <CSSTransition
        in={activeComponent === 3}
        unmountOnExit
        timeout={500}
        classNames={activeFormAnimation}
      >
        <CalculatedWater weight={userInfo['weight']} exercise={userInfo['exercise']} onClickRestart={restartButtonPressed} />
      </CSSTransition>
      <Waves />
    </div>
  );
}

export default App;
