import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CircularArrowButton({onClick, disabled}) {
  return (
    <IconButton
      sx={{
        backgroundColor: disabled ? 'lightgray' : '#FF640A', // Gray background when disabled
        color: 'white',
        borderRadius: '50%',
        width: 56,
        height: 56,
        cursor: disabled ? 'not-allowed' : 'pointer', // Show "not-allowed" cursor when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable hover and click interactions when disabled
        '&:hover': {
          backgroundColor: disabled ? 'lightgray' : '#A04000', // Prevent hover effect when disabled
        },
      }}
      onClick={disabled ? undefined : onClick} // Prevent click when disabled
    >
      <ArrowForwardIcon />
    </IconButton>
  );
}

export default CircularArrowButton;
