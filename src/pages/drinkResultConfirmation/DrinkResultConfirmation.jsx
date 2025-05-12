import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import ResusableButton from '../../components/ReusableButton';
import LoadingPage from "../../components/LoadingWizard";
import witch from "../../assets/images/witch.gif"
import wizard from "../../assets/images/wizard.gif"
import { useLocation } from 'react-router-dom';
import orangebottle from '../../assets/images/orangebottle.png';
import drinkService from '../../api/drinkService.js';
import { useDrinks } from "../../utils/DrinksProvider.jsx"

function DrinkResultConfirmation() {

    const { toDrinkResultLabel , toDrinkResultConfirmation, toDrinkRefine } = useGoTo();

    const [isLoading, setIsLoading] = React.useState(false);

    const location = useLocation();
    const generatedDrink = location.state || {};
    
    const [isRerolling, setIsRerolling] = React.useState(false);
    const {drinkData, setDrinkData} = useDrinks();
    const rerolls = drinkData.rerolls;
    const refines = drinkData.refines;

    

    const handleOnClick = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toDrinkResultLabel();
    }

    const handleReroll = async () => {
      try {
        setIsRerolling(true);
        if (rerolls > 0) {
          setDrinkData({ ...drinkData, rerolls: rerolls - 1 }); // Update context!
          const userDrinkData = { ...drinkData, rerolls: rerolls - 1 };
          const gptResponse = await drinkService.generateDrink(userDrinkData);
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
      ingredients: (generatedDrink.ingredients || "").split(',').map(ingredient => ingredient.trim()),
      taste_profile: (generatedDrink.taste_profile || "").split(',').map(taste => taste.trim()),
    } 

    if (isLoading) {
      return <LoadingPage gif={witch} message="Adding sugar, spice and everything nice" />
    }

    if (isRerolling) {
      return <LoadingPage gif={wizard} message="We're working our Magic..." /> 
    }
    // TODO: Dynamically load data from output of chatgpt
    return (
    <>
      <BackButton />

      <div className="h-screen bg-black text-white p-4 flex flex-col items-center justify-center transform scale-100">

        {/* Main content */}
        <div className="w-full max-w-4xl flex justify-between">

          {/* Left column */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl">Your Drink</span>
            <img src={orangebottle} alt="Generated Drink" className="w-72 h-auto mt-4 rotate-15" />
            <h2 className="text-3xl font-bold text-deepOrange ">
              {drinkDetails.drink_name}
            </h2>
          </div>

          {/* Right column */}
          <div className="w-1/2 text-center space-y-10 flex flex-col items-center">
            <div className=" flex flex-col items-center">
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

            {/* Buttons */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-4 justify-center">
                <ResusableButton
                  disabled={rerolls <= 0}
                  onClick={handleReroll}
                  text={`Reroll (${rerolls})`}
                  color="green"
                  width={140}
                  height={40}
                />
                <ResusableButton
                  disabled={refines <= 0}
                  onClick={handleRefine}
                  text={`Refine (${refines})`}
                  color="green"
                  width={140}
                  height={40}
                />
              </div>
              <ResusableButton
                onClick={handleOnClick}
                text="Confirm"
                color="pink"
                width={288}
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