import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkResultConfirmation() {

    const { toDrinkResultLabel } = useGoTo();

    const handleOnClick = () => {
        toDrinkResultLabel();
    }

    // TODO: Dynamically load data from output of chatgpt
    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl"> Your Drink</p>
            {/* TODO: Dynamically load in data from Chatgpt */}
            <h1 className="font-bold">Gateau Opera Latte</h1>
            <p className="my-20"> INSERT IMAGE </p>
            <div className="w-8/12">
              <p className="text-lg"> Inspired by the French layered almond cake -a harmonious blend of almond, chocolate and coffee</p>
            </div>

            <div className="flex flex-row items-center mt-10 justify-between">
              <div className="w-5/12">
                <p className="font-bold text-2xl"> Ingredients: </p>
                <p> Coffee, Honey, Roasted, Almond, Cocoa, Milk</p>
              </div>
              <div>
                <p className="font-bold text-2xl"> Taste Profile: </p>
                <p> Sweet, Nutty, Chocolatey</p>
              </div>
            </div>
            <CircularArrowButton onClick={handleOnClick}/>
          </div>  
        </div>
     </>
    )
  }
  
  export default DrinkResultConfirmation;