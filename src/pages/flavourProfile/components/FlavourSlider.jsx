import React from 'react';
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function FlavourSlider({ title, value, marks, onChangeValue, flavourIntensity, showTooltips }) {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="font-satoshiBold text-lg sm:text-xl mb-4">{title}</h3>
      <div className="flex w-full items-center justify-between gap-4">
        <Box sx={{ width: '75%' }} className="mx-auto">
          <Slider
            onChange={onChangeValue}
            value={value}
            min={0}
            max={100}
            step={25}
            valueLabelDisplay={showTooltips ? 'on' : 'auto'}
            valueLabelFormat={(v) => flavourIntensity[v] || v}
            sx={{
              color: '#FF640A',
              '& .MuiSlider-thumb': {
                backgroundColor: '#FF640A',
                border: '2px solid white',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#FF640A',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#E5E7EB',
              },
              '& .MuiSlider-markActive': {
                backgroundColor: '#FF640A',
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
}

export default FlavourSlider;
