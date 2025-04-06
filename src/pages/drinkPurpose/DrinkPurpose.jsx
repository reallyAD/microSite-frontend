import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkPurpose() {

    const { toDrinkBase } = useGoTo();

    const handleOnClick = () => {
        toDrinkBase();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">What is this drink for?</h1>
            <p className="text-lg">Pick one or more - we'll tailor the drink to match</p>
            <CircularArrowButton onClick={handleOnClick} />    
          </div>      
        </div>
     </>
    )
  }
  
  export default DrinkPurpose;