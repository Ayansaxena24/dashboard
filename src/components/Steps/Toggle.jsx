import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({setselected}) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      border="2"
    >
      <ToggleButton value="location" onClick={ () => setselected("location")}>location</ToggleButton>
      <ToggleButton value="radius" onClick={ () => setselected("radius")}>radius</ToggleButton>
    </ToggleButtonGroup>
  );
}