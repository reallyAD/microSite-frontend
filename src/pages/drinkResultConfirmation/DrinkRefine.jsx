import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { TextField, Typography } from '@mui/material';
import { useGoTo } from '../../utils/useGoTo';
import drinkService from '../../api/drinkService';
import BackButton from '../../components/BackButton';
import ResusableButton from '../../components/ReusableButton';
import LoadingPage from "../../components/Loading";

// Dynamically import bottle images
const bottleImages = import.meta.glob('../../assets/images/*.png', { eager: true , import: 'default'});

function DrinkRefine() {

    const { toDrinkResultConfirmation } = useGoTo();
    const location = useLocation();
    const generatedDrink = location.state || {};
    const [imageSrc, setImageSrc] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [refinePrompt, setRefinePrompt] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const MAX_WORDS = 50;

    const bottleImageKey = `../../assets/images/${generatedDrink.bottle_color}.png`;

    useEffect(() => {
      console.log("Bottle Image Key: ", bottleImageKey);
      if (bottleImages[bottleImageKey]) {
        setImageSrc(bottleImages[bottleImageKey]);
      } else {
        console.error(`Image not found for color: ${generatedDrink.bottle_color}`);
    }

    }, [bottleImageKey]);

    const drinkDetails = {
        drink_name: generatedDrink.drink_name,
        category: generatedDrink.category,  
        description: generatedDrink.description,
        ingredients: generatedDrink.ingredients.split(',').map(ingredient => ingredient.trim()),
        taste_profile: generatedDrink.taste_profile.split(',').map(taste => taste.trim()),
        bottle_color: generatedDrink.bottle_color,
    } 

    const handleRefinePromptChange = (event) => {
        const text = event.target.value;
        setRefinePrompt(text);

        const words = text.trim().split(/\s+/).filter(word => word !== "");
        setWordCount(words.length);
    }

    const handleRefineDrink = async () => {
        try {
            setIsLoading(true);
            console.log("BEFORE REFINE DRINK", generatedDrink, refinePrompt)
            const gptResponse = await drinkService.refineGeneratedDrink(generatedDrink, refinePrompt);

            console.log("GPT RESPONSE: ", gptResponse);

            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Navigate to next page
            toDrinkResultConfirmation(gptResponse);

        } catch (error) {
            console.error("Error refining drink:", error);
        }
    }

    if (isLoading) {
        return <LoadingPage message ="We're working our Magic..." />
    }

    const isOverWordLimit = wordCount > MAX_WORDS;

    return (
        <>
            <BackButton/>
            <div className="h-screen px-4 pt-24 pb-10">
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-y-10 md:gap-x-10 items-start justify-center mt-6 overflow-y-auto">

                    {/* Left column */}
                    <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                    <h2 className="font-bold text-2xl sm:text-3xl mb-2">Your Current Drink</h2>
                    <img src={imageSrc} alt="Generated Drink" className="w-48 sm:w-72 h-auto mt-2 rotate-15" />
                    <h3 className="text-2xl font-bold text-deepOrange mt-4">{drinkDetails.drink_name}</h3>
                    </div>

                    {/* Right column: contained */}
                    <div className="w-full h- md:w-1/2 bg-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col space-y-6">

                    {/* Description */}
                    <div className="text-center">
                        <p className="font-bold text-deepOrange text-lg sm:text-xl mb-2">Description:</p>
                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed">{drinkDetails.description}</p>
                    </div>

                    {/* Ingredients + Taste Notes */}
                    <div className="flex flex-col sm:flex-row gap-y-4 text-sm sm:text-base">
                        <div className="flex-1">
                        <p className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Ingredients:</p>
                        <p className="text-gray-200">{drinkDetails.ingredients.join(', ')}</p>
                        </div>
                        <div className="flex-1">
                        <p className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Taste Notes:</p>
                        <p className="text-gray-200">{drinkDetails.taste_profile.join(', ')}</p>
                        </div>
                    </div>

                    {/* Refinement Prompt */}
                    <div className="flex flex-col">
                        <Typography variant="subtitle1" className="text-white mb-2">
                        How would you like to refine your drink?
                        </Typography>
                        <TextField
                        multiline
                        rows={3}
                        value={refinePrompt}
                        onChange={handleRefinePromptChange}
                        placeholder="Tell us how you'd like to modify your drink (e.g., more sweetness...)"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: isOverWordLimit ? 'red' : 'rgba(255, 255, 255, 0.5)',
                            },
                            '&:hover fieldset': {
                                borderColor: isOverWordLimit ? 'red' : 'rgba(255, 255, 255, 0.7)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: isOverWordLimit ? 'red' : '#FF8C42',
                            },
                            },
                        }}
                        />
                        <Typography
                        variant="caption"
                        className="mt-1"
                        sx={{
                            color: isOverWordLimit ? 'red' : 'gray',
                            fontWeight: isOverWordLimit ? 'bold' : 'normal',
                        }}
                        >
                        {wordCount}/{MAX_WORDS} words {isOverWordLimit && ' - Please shorten your refinement'}
                        </Typography>
                    </div>

                    {/* Refine Button */}
                        <div className="mt-2 flex justify-center">
                            <ResusableButton
                            onClick={handleRefineDrink}
                            text="Refine"
                            color="green"
                            width={288}
                            height={40}
                            disabled={wordCount === 0 || isOverWordLimit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrinkRefine;