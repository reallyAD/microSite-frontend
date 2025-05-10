import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularArrowButton from "../../../components/CircularArrowButton.jsx";
import {useDrinks} from "../../../utils/DrinksProvider.jsx";
import {useGoTo} from "../../../utils/useGoTo.jsx";


function PurposeForm() {

    const { toDrinkBase } = useGoTo();
    const { drinkData, setDrinkData } = useDrinks();

    const [selectedPurpose,  setSelectedPurpose] = useState(drinkData?.purpose || "");
    const [isPurposeSelected, setIsPurposeSelected] = useState(false);

    const categories = ["Retail", "Events", "Branding", "Fun"];

    useEffect( () => {
        setIsPurposeSelected(selectedPurpose.length > 0);
    }, [selectedPurpose]);

    const handleSelectPurpose = (category) => {
        const newValue = selectedPurpose === category ? "" : category;
        setSelectedPurpose(newValue);
    }

    const handleOnClick = () => {
        // Update drink data with selected purpose
        setDrinkData({
            ...drinkData,
            purpose: selectedPurpose }
        );

        // Navigate to next page
        toDrinkBase();
    }

    return (
        <>
            <div className="mb-8">
                <div className="grid grid-cols-2 gap-x-14 gap-y-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleSelectPurpose(category)}
                            variant={selectedPurpose === category ? "contained" : "outlined"}
                            sx={{
                                // If purpose is selected, use green, else use pink
                                backgroundColor: selectedPurpose === category ? '#CBEF5E' : '#FFB4F0',
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
            <CircularArrowButton
                disabled={!isPurposeSelected}
                onClick={handleOnClick}
            />
        </>
    );
}

export default PurposeForm;
