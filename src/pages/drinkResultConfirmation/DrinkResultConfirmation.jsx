import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import ResusableButton from '../../components/ReusableButton';
import LoadingPage from "../../components/Loading";
import { useLocation } from 'react-router-dom';
import drinkService from '../../api/drinkService.js';
import { useDrinks } from "../../utils/DrinksContext.js"

 // Dynamically import bottle images
 const bottleImages = import.meta.glob('../../assets/images/*.png', { eager: true , import: 'default'});

function DrinkResultConfirmation() {

    const { toDrinkResultLabel , toDrinkResultConfirmation, toDrinkRefine } = useGoTo();

    const [isLoading, setIsLoading] = React.useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    const location = useLocation();
    const generatedDrink = location.state || {};

    console.log("Generated Drink: ", generatedDrink);
    
    const [isRerolling, setIsRerolling] = React.useState(false);
    const {drinkData, setDrinkData} = useDrinks();
    const rerolls = drinkData.rerolls;
    const refines = drinkData.refines;

    const bottleImageKey = `../../assets/images/${generatedDrink.bottle_color}.png`;
    console.log("Bottle Image Key: ", bottleImageKey);

    useEffect(() => {
      if (bottleImages[bottleImageKey]) {
        setImageSrc(bottleImages[bottleImageKey]);
      } else {
        console.error(`Image not found for color: ${generatedDrink.bottle_color}`);
    }

    }, [bottleImageKey]);

    

    const handleOnClick = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toDrinkResultLabel(generatedDrink);
    }

    const handleReroll = async () => {
      try {
        setIsRerolling(true);
        if (rerolls > 0) {
          setDrinkData({ ...drinkData, rerolls: rerolls - 1 }); // Update context!
          const userDrinkData = { ...drinkData, rerolls: rerolls - 1 };
          const gptResponse = await drinkService.generateDrink(userDrinkData);
          console.log("GPT Response from re-roll: ", gptResponse);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          toDrinkResultConfirmation({ ...gptResponse, reRollId: Date.now(), rerolls: rerolls - 1 });
        }
      } catch (error) {
        console.error('Error generating drink:', error);
      } finally {
        setIsRerolling(false);
      }
    };

    const handleRefine = async () => {
      try {
        if (refines > 0) {
          setDrinkData({ ...drinkData, refines: refines - 1 }); // Update context!
          // Optionally, navigate after updating context
          const newRefines = refines - 1;
          toDrinkRefine({ ...generatedDrink, refines: newRefines });
        }
      } catch (err) {
        console.error("Error refining drink:", err);
      }
};

    const drinkDetails = {
      drink_name: generatedDrink.drink_name,
      category: generatedDrink.category,  
      description: generatedDrink.description,
      ingredients: generatedDrink.ingredients,
      taste_profile: generatedDrink.taste_profile,
      bottle_color: generatedDrink.bottle_color,
    } 

    if (isLoading) {
      return <LoadingPage message="Adding sugar, spice and everything nice" />
    }

    if (isRerolling) {
      return <LoadingPage message="We're working our Magic..." /> 
    }
    // TODO: Dynamically load data from output of chatgpt
    return (
      <>
        <BackButton />

        <div className="bg-black text-white h-screen px-4 pt-24 pb-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between gap-8 overflow-y-auto">

            {/* Left column: Drink image & name */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h2 className="text-deepOrange font-bold text-2xl sm:text-3xl mb-4">Your Drink</h2>
              <img
                src={imageSrc}
                alt="Generated Drink"
                className="w-32 sm:w-40 md:w-72 h-auto rotate-15 mt-2"
              />
              <h2 className="text-2xl font-bold mt-6 text-center">
                {drinkDetails.drink_name}
              </h2>
            </div>

            {/* Right column: Description, Ingredients, Taste, Buttons */}
            <div className="w-full md:w-1/2 bg-zinc-900 rounded-2xl p-6 sm:p-8 text-center space-y-8">
              <div>
                <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Description</span>
                <p className="text-base sm:text-lg text-gray-200">{drinkDetails.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm sm:text-base">
                <div className="flex-1">
                  <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Ingredients</span>
                  <p className="text-gray-200">{drinkDetails.ingredients}</p>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-deepOrange text-lg sm:text-xl mb-1">Taste Notes</span>
                  <p className="text-gray-200">{drinkDetails.taste_profile}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 justify-center">
                  <ResusableButton
                    disabled={rerolls <= 0}
                    onClick={handleReroll}
                    text="Reroll"
                    color="green"
                    width={140}
                    height={40}
                  />
                  <ResusableButton
                    disabled={refines <= 0}
                    onClick={handleRefine}
                    text="Refine"
                    color="green"
                    width={140}
                    height={40}
                  />
                </div>

                <ResusableButton
                  onClick={handleOnClick}
                  text="Confirm"
                  color="pink"
                  width={140}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </>
);

  }
  
  export default DrinkResultConfirmation;