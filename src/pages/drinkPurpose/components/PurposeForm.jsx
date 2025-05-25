import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularArrowButton from "../../../components/CircularArrowButton.jsx";
import {useDrinks} from "../../../utils/DrinksContext.js";
import {useGoTo} from "../../../utils/useGoTo.jsx";


function PurposeForm() {
  const { toDrinkBase } = useGoTo();
  const { drinkData, setDrinkData } = useDrinks();

  const [selectedPurpose, setSelectedPurpose] = useState(drinkData?.purpose || "");
  const [isPurposeSelected, setIsPurposeSelected] = useState(false);

  const categories = ["Retail", "Events", "Branding", "Fun"];

  useEffect(() => {
    setIsPurposeSelected(selectedPurpose.length > 0);
  }, [selectedPurpose]);

  const handleSelectPurpose = (category) => {
    const newValue = selectedPurpose === category ? "" : category;
    setSelectedPurpose(newValue);
  };

  const handleOnClick = () => {
    setDrinkData({
      ...drinkData,
      purpose: selectedPurpose,
    });
    toDrinkBase();
  };

  return (
    <>
      <div className="my-6 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-14 sm:gap-y-6">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleSelectPurpose(category)}
              variant={selectedPurpose === category ? "contained" : "outlined"}
              sx={{
                backgroundColor: selectedPurpose === category ? '#CBEF5E' : '#FFB4F0',
                color: '#000000',
                borderColor: "inherit",
                '&:hover': {
                  backgroundColor: '#CBEF5E',
                },
                fontWeight: 'bold',
                height: '56px',
                width: '140px',
                borderRadius: '8px',
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-0">
        <CircularArrowButton
          disabled={!isPurposeSelected}
          onClick={handleOnClick}
        />
      </div>
    </>
  );
}

export default PurposeForm;
