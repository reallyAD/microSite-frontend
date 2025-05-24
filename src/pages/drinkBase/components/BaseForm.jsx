import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularArrowButton from "../../../components/CircularArrowButton.jsx";
import { useDrinks } from "../../../utils/DrinksProvider.jsx";
import { useGoTo } from "../../../utils/useGoTo.jsx";

function BaseForm() {
  const { toFlavourProfile } = useGoTo();
  const { drinkData, setDrinkData } = useDrinks();

  const [selectedBase, setSelectedBase] = useState(drinkData?.drinkBase || "");
  const [isBaseSelected, setIsBaseSelected] = useState(false);

  const categories = ["Coffee", "Tea", "Juice", "Others"];

  useEffect(() => {
    setIsBaseSelected(selectedBase.length > 0);
  }, [selectedBase]);

  const handleSelectBase = (category) => {
    const newValue = selectedBase === category ? "" : category;
    setSelectedBase(newValue);
  };

  const handleOnClick = () => {
    setDrinkData({
      ...drinkData,
      drinkBase: selectedBase,
    });
    toFlavourProfile();
  };

  return (
    <>
      <div className="my-6 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-14 sm:gap-y-6">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleSelectBase(category)}
              variant={selectedBase === category ? "contained" : "outlined"}
              sx={{
                backgroundColor: selectedBase === category ? '#CBEF5E' : '#FFB4F0',
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

      <div className="mt-4">
        <CircularArrowButton
          disabled={!isBaseSelected}
          onClick={handleOnClick}
        />
      </div>
    </>
  );
}

export default BaseForm;
