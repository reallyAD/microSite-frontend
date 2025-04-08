import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularArrowButton from "../../../components/CircularArrowButton.jsx";
import { useDrinks } from "../../../utils/DrinksProvider.jsx";
import { useGoTo } from "../../../utils/useGoTo.jsx";


function BaseForm () {

    const { toFlavourProfile } = useGoTo();
    const { drinkData, setDrinkData } = useDrinks();

    const [selectedBase,  setSelectedBase] = useState("");

    const categories = ["Coffee", "Tea", "Juice", "Others"];

    const handleSelectBase = (category) => {
        if (selectedBase === category) {
            setSelectedBase(""); // Deselect if already selected
        } else {
            setSelectedBase(category);
        }
    }

    const handleOnClick = () => {
        // Update drink data with selected purpose
        setDrinkData({
            ...drinkData,
            drinkBase: selectedBase}
        );

        // Navigate to next page
        toFlavourProfile();
    }

    return (
        <>
            <div className="mb-8">
                <div className="grid grid-cols-2 gap-x-14 gap-y-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleSelectBase(category)}
                            variant={selectedBase=== category ? "contained" : "outlined"}
                            sx={{
                                // If purpose is selected, use green, else use pink
                                backgroundColor: selectedBase === category ? '#CBEF5E' : '#FFB4F0',
                                color: '#000000',
                                borderColor: "inherit",
                                '&:hover': {
                                    backgroundColor: '#CBEF5E', // darker on hover
                                },
                                marginTop: '24px',
                                fontWeight: 'bold',
                                height: '56px',
                                width: '140px',
                                borderRadius: '8px',
                            }}>
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <CircularArrowButton onClick={handleOnClick}/>
        </>
    );
}

export default BaseForm;
