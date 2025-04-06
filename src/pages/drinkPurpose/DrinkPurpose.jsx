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
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <p>Drink Purpose</p>
          <CircularArrowButton onClick={handleOnClick} />        
        </div>
     </>
    )
  }
  
  export default DrinkPurpose;