import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CircularArrowButton({onClick}) {
  return (
    <IconButton
      sx={{
        backgroundColor: '#D35400',         // dark orange
        color: 'white',                     // icon color
        borderRadius: '50%',                // circular shape
        width: 56,
        height: 56,
        '&:hover': {
          backgroundColor: '#A04000',       // darker on hover
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </IconButton>
  );
}

export default CircularArrowButton;