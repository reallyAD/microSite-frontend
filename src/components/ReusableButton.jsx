import React from "react";
import Button from "@mui/material/Button";

// Helper function to calculate darken hex  color
function darkenHexColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;

    const newColor = (
        0x1000000 +
        (Math.max(0, R) << 16) +
        (Math.max(0, G) << 8) +
        Math.max(0, B)
    )
        .toString(16)
        .slice(1);

    return `#${newColor}`;
}

function ResusableButton({ text, onClick, color, width, height, disabled}) {

    const buttonColorMap = {
        deepOrange: "#FF640A",
        black: "#000000",
        offWhite: "#FDFAF4",
        lightGray: "#BEBEBE",
        pink: "#FFB4F0",
        green: "#CBEF5E",
        red: "#F54646",
        grey: "#414146",
    };


    const buttonColor = buttonColorMap[color] || "#FF640A"; // default to deep orange
    const hoverColor = darkenHexColor(buttonColor, 20); // Darken the color by 15%

    return (
      <Button
          variant='contained'
          onClick={disabled ? undefined : onClick }
          sx={{
              backgroundColor: disabled ? 'lightgray' : buttonColor,
              color: '#000000',
              '&:hover': {
                  backgroundColor: disabled ? 'lightgray' : hoverColor,
              },
              cursor: disabled ? 'not-allowed' : 'pointer',
              pointerEvents: disabled ? 'none' : 'auto',
              fontWeight: 'bold',
              width: `${width}px`,
              height: `${height}px`,
              textTransform: 'none',
              
          }}
      >
          {text}
      </Button>
    );
}

export default ResusableButton;
