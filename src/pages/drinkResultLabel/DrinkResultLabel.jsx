import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkResultLabel() {
    const location = useLocation();
    const generatedDrink = location.state || {};
    const { toDrinkResult } = useGoTo();

    const handleOnClick = () => {
        toDrinkResult(generatedDrink);
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold w-8/12 text-center">To make this uniquely yours, add a label to your drink</h1>
            <CircularArrowButton onClick={handleOnClick}/>
          </div>
        </div>
     </>
    )
  }
  
  export default DrinkResultLabel;