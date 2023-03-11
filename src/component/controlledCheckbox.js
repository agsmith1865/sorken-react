
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{backgroundColor:"blue"}}> 
        <div style={{backgroundColor:"red"}}>{props.children}</div>
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    </div>
  );
}