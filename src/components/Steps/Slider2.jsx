import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes2({disabled}) {
  return (
    <Box width={1380}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" max={30} min={0} disabled={disabled}/>
    </Box>
  );
}