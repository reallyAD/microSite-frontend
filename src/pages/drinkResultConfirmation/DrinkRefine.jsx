import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { TextField, Typography } from '@mui/material';
import { useGoTo } from '../../utils/useGoTo';
import drinkService from '../../api/drinkService';
import BackButton from '../../components/BackButton';
import orangebottle from '../../assets/images/orangebottle.png';
import ResusableButton from '../../components/ReusableButton';
import LoadingPage from "../../components/LoadingWizard";
import wizard from "../../assets/images/wizard.gif";

function DrinkRefine() {

    const { toDrinkResultConfirmation } = useGoTo();
    const location = useLocation();
    const generatedDrink = location.state || {};

    const [isLoading, setIsLoading] = useState(false);
    const [refinePrompt, setRefinePrompt] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const MAX_WORDS = 50;

    const drinkDetails = {
        drink_name: generatedDrink.drink_name,
        category: generatedDrink.category,  
        description: generatedDrink.description,
        ingredients: generatedDrink.ingredients.split(',').map(ingredient => ingredient.trim()),
        taste_profile: generatedDrink.taste_profile.split(',').map(taste => taste.trim()),
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
        return <LoadingPage gif={wizard} message ="We're working our Magic..." />
    }

    const isOverWordLimit = wordCount > MAX_WORDS;

    return (
        <div className="h-screen bg-black text-white p-4 flex flex-col">
            <BackButton/> 
            
            <div className="flex flex-col items-center justify-center h-full">
                <h1>Refine Drink</h1>
                
                <p>This is your current drink.</p>
                <div className="w-full max-w-4xl flex justify-between mt-4">

                    {/* Left column */}
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-3xl">Your Current Drink</span>
                        <img src={orangebottle} alt="Generated Drink" className="w-72 h-auto mt-4 rotate-15" />
                        <h2 className="text-3xl font-bold text-deepOrange ">
                            {drinkDetails.drink_name}
                        </h2>
                    </div>

                    {/* Right column */}
                    <div className="w-1/2 text-center space-y-10 flex flex-col items-center mt-10">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-deepOrange mb-1 text-xl"> Description:</span>
                            <span className="mt-1 text-lg">{drinkDetails.description}</span>
                        </div>
                        <div className="flex justify-center text-sm w-full">
                            <div className="w-1/2 pr-4 flex flex-col items-center">
                                <span className="font-bold text-deepOrange mb-1 text-xl">Ingredients:</span>
                                <span className="text-lg text-center mt-2">{drinkDetails.ingredients.join(', ')}</span>
                            </div>
                            <div className="w-1/2 pl-4 flex flex-col items-center">
                                <span className="font-bold text-deepOrange mb-1 text-xl">Taste Notes:</span>
                                <span className="text-lg text-center mt-2">{drinkDetails.taste_profile.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col items-left mt-14">
                    <Typography 
                        variant="subtitle1" 
                        sx={{ color: 'white', marginBottom: '8px' }}
                    >
                        <p>How would you like to refine your drink?</p>
                    </Typography>
                    <TextField
                        multiline
                        rows={3}
                        value={refinePrompt}
                        onChange={handleRefinePromptChange}
                        placeholder="Tell us how you'd like to modify your drink (e.g., more sweetness, less alcohol, add coconut flavor...)"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
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
                        align="right" 
                        className="w-full mt-1"
                        sx={{ 
                            color: isOverWordLimit ? 'red' : 'gray',
                            fontWeight: isOverWordLimit ? 'bold' : 'normal'
                        }}
                    >
                        {wordCount}/{MAX_WORDS} words {isOverWordLimit && "- Please shorten your refinement"}
                    </Typography>
                </div>

                <ResusableButton
                    onClick={handleRefineDrink}
                    text="Refine"
                    color={"green"}
                    width={288}
                    height={40}
                    disabled={wordCount === 0 || isOverWordLimit}
                />
            </div>
        </div>
    );
}

export default DrinkRefine;