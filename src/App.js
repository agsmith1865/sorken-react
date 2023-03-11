import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ControlledCheckbox from './component/controlledCheckbox';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';


function App() {
  const [disabledCheck, setChecked] = useState(true);
  console.log("this is in chrome - ",disabledCheck);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.serkos
        </p>
        <a
          className="App-link"
          href="https://reactj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Checkbox
              checked={disabledCheck}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
          />
          <Button variant="contained" disabled={disabledCheck}>Hello World</Button>
        </div>
        <div>
          <ControlledCheckbox><span>THIS BUTTON IS CONTROLLED</span></ControlledCheckbox>
        </div>

      </header>
    </div>
    
  );
}

export default App;
