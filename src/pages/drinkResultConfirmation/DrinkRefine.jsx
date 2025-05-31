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
        // Ensure ingredients and taste_profile are arrays, even if the source is a string
        ingredients: typeof generatedDrink.ingredients === 'string' 
            ? generatedDrink.ingredients.split(',').map(ingredient => ingredient.trim()) 
            : (generatedDrink.ingredients || []),
        taste_profile: typeof generatedDrink.taste_profile === 'string'
            ? generatedDrink.taste_profile.split(',').map(taste => taste.trim())
            : (generatedDrink.taste_profile || []),
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
            setIsLoading(false); // Ensure loading state is reset on error
        }
    }

    if (isLoading) {
        return <LoadingPage message ="We're working our Magic..." />
    }

    const isOverWordLimit = wordCount > MAX_WORDS;

    return (
        <>
            <BackButton/>
            {/* Main page container - matches DrinkResultConfirmation */}
            <div className="bg-black text-white h-screen px-4 pt-24 pb-10 flex flex-col items-center justify-center">
                {/* Two-column layout container - matches DrinkResultConfirmation */}
                <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between gap-8 overflow-y-auto">

                    {/* Left column: Drink image & name - matches DrinkResultConfirmation */}
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                        <h2 className="text-deepOrange font-bold text-2xl sm:text-3xl mb-4">Your Current Drink</h2>
                        <img src={imageSrc} alt="Generated Drink" className="w-32 sm:w-40 md:w-72 h-auto rotate-15 mt-2" />
                        <h3 className="text-2xl font-bold mt-6 text-center">{drinkDetails.drink_name}</h3>
                    </div>

                    {/* Right column: Details, Refinement Prompt, and Button - structure adapted from DrinkResultConfirmation */}
                    <div className="w-full md:w-1/2 bg-zinc-900 rounded-2xl p-6 sm:p-8 text-center space-y-8">
                        {/* Description - matches DrinkResultConfirmation */}
                        <div>
                            <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Description</span>
                            <p className="text-base sm:text-lg text-gray-200">{drinkDetails.description}</p>
                        </div>

                        {/* Ingredients + Taste Notes - matches DrinkResultConfirmation */}
                        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm sm:text-base">
                            <div className="flex-1">
                                <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Ingredients</span>
                                <p className="text-gray-200">{drinkDetails.ingredients.join(', ')}</p>
                            </div>
                            <div className="flex-1">
                                <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Taste Notes</span>
                                <p className="text-gray-200">{drinkDetails.taste_profile.join(', ')}</p>
                            </div>
                        </div>
                        
                        {/* Refinement Prompt Section - Specific to DrinkRefine */}
                        <div className="flex flex-col items-center w-full"> {/* Centering the refinement section */}
                            <Typography variant="subtitle1" className="text-white mb-2 text-lg sm:text-xl text-left w-full" sx={{ maxWidth: '90%' }}> 
                                How would you like to refine your drink?
                            </Typography>
                            <TextField
                                multiline
                                rows={3}
                                value={refinePrompt}
                                onChange={handleRefinePromptChange}
                                placeholder="e.g., make it sweeter, add a hint of mint..."
                                variant="outlined"
                                fullWidth
                                sx={{
                                    maxWidth: '90%', // Limit width of text field
                                    '& .MuiInputBase-input': { color: 'white' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: isOverWordLimit ? 'red' : '#FF640A', // Changed to deepOrange for consistency
                                        },
                                        '&:hover fieldset': {
                                            borderColor: isOverWordLimit ? 'red' : '#FF640A',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: isOverWordLimit ? 'red' : '#FF640A', // Changed to deepOrange for consistency
                                        },
                                    },
                                }}
                            />
                            <Typography
                                variant="caption"
                                className="mt-1 text-left w-full"
                                sx={{
                                    color: isOverWordLimit ? 'red' : 'gray',
                                    fontWeight: isOverWordLimit ? 'bold' : 'normal',
                                    maxWidth: '90%' 
                                }}
                            >
                                {wordCount}/{MAX_WORDS} words {isOverWordLimit && ' - Please shorten your refinement'}
                            </Typography>
                        </div>

                        {/* Refine Button - Centered, similar to Confirm button in DrinkResultConfirmation */}
                        <div className="flex flex-col items-center">
                            <ResusableButton
                                onClick={handleRefineDrink}
                                text="Refine Drink"
                                color="pink"
                                width={160} // Adjusted width
                                height={40}
                                disabled={wordCount === 0 || isOverWordLimit || isLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrinkRefine;