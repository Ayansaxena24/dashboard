import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({disabled}) {
  return (
    <Box width={1380}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" max={100000} min={100} disabled={disabled}/>
    </Box>
  );
}