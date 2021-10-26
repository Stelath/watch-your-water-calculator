// Import SDKs
import React, {useState} from 'react';

// Import Components
import Welcome from './components/Welcome';
import WeightEntry from './components/WeightEntry';

function App() {
  const [activeComponent, setActiveComponent] = useState(0);

  function getActiveComponent()
  {
    switch(activeComponent) {
      case 0:
        return(<Welcome onClick={welcomeButtonPressed} />);
      case 1:
        console.log("Weight Entry");
        return(<WeightEntry onClick={weightEntryButtonPressed} />);
    }
  }

  function welcomeButtonPressed() {
    console.log('Continue button pressed');
    setActiveComponent(1);
  }

  function weightEntryButtonPressed() {
    console.log('Weight button pressed');
  }

  return (
    <div className="App">
      {getActiveComponent()}
    </div>
  );
}

export default App;
