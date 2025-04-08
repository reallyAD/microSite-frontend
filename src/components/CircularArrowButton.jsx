import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CircularArrowButton({onClick}) {
  return (
    <IconButton
      sx={{
        backgroundColor: '#FF640A',
        color: 'white',
        borderRadius: '50%',
        width: 56,
        height: 56,
        '&:hover': {
          backgroundColor: '#A04000',
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </IconButton>
  );
}

export default CircularArrowButton;
