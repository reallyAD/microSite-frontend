import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';
import ResusableButton from '../../components/ReusableButton';

function DrinkResultConfirmation() {

    const { toDrinkResultLabel } = useGoTo();

    const handleOnClick = () => {
        toDrinkResultLabel();
    }

    const drinkDetails = {
      name: "Gateu Opera Latte",
      description: "Inspired by the French layered almond cake - a harmonious blend of almond, chocolate and coffee",
      ingredients: ["Coffee", "Honey", "Roasted Almond", "Cocoa", "Milk"],
      tasteProfile: ["Sweet", "Nutty", "Chocolatey"],
    }

    // TODO: Dynamically load data from output of chatgpt
    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl"> Your Drink</p>
            {/* TODO: Dynamically load in data from Chatgpt */}
            <h1 className="font-bold">
              <span className="text-deepOrange">{drinkDetails.name}</span>
            </h1>
            <p className="my-20"> INSERT IMAGE </p>
            <div className="w-8/12">
              <p className="text-lg">{drinkDetails.description}</p>
            </div>

            <div className="flex flex-row mt-10 justify-between">
              <div className="w-5/12">
                <p className="font-bold text-2xl">
                  <span className="text-deepOrange"> Ingredients </span>
                </p>
                <p className="text-xs">{drinkDetails.ingredients.join(", ")}</p>
              </div>
              <div>
                <p className="font-bold text-2xl">
                  <span className="text-deepOrange"> Taste Profile </span>
                </p>
                <p className="text-xs">{drinkDetails.tasteProfile.join(",")}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-center items-center gap-x-2 mt-8">
                <ResusableButton
                  onClick={handleOnClick}
                  text="Re-Roll"
                  color="green"
                  width={140}
                  height={40}
                />
                <ResusableButton  
                  onClick={handleOnClick}
                  text="Refine"
                  color="green"
                  width={140}
                  height={40}
                />
              </div>
              <div className="flex justify-center items-center mt-2">
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
    )
  }
  
  export default DrinkResultConfirmation;