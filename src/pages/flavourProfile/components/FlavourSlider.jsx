import React from 'react';
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function FlavourSlider({ title, value, minLabel, maxLabel, marks, onChangeValue, flavourIntensity }) {
    return (
        <div className="flex flex-col items-center">
            <h3 className="font-satoshiBold text-2xl mb-4">{title}</h3>
            <Box sx={{ width: 400 }} className="flex items-center justify-between">
                {/* Fixed-width minLabel */}
                <p className="w-15 mb-8 text-left">{minLabel}</p>

                {/* Slider wrapper */}
                <Box sx={{ width: 250}}>
                    <Slider
                        onChange={onChangeValue}
                        // marks={marks}
                        value={value}
                        min={0}
                        max={100}
                        step={25}
                        aria-label="Custom marks"
                        defaultValue={50}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => flavourIntensity[value] || value}
                        sx={{
                            color: '#FF640A', // main track and thumb
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#FF640A',
                                border: '2px solid white',
                            },
                            '& .MuiSlider-track': {
                                backgroundColor: '#FF640A',
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#E5E7EB', // Tailwind gray-200
                            },
                            '& .MuiSlider-markActive': {
                                backgroundColor: '#FF640A',
                            }
                        }}
                    />
                </Box>

                {/* Fixed-width maxLabel */}
                <p className="w-15 mb-8 text-right">{maxLabel}</p>
            </Box>
        </div>
    );
}

export default FlavourSlider;
