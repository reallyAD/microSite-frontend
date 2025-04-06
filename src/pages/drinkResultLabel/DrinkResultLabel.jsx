import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkResultLabel() {

    const { toDrinkResult } = useGoTo();

    const handleOnClick = () => {
        toDrinkResult();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <p>Drink Result Label!</p>
          <CircularArrowButton onClick={handleOnClick} />
        </div>
     </>
    )
  }
  
  export default DrinkResultLabel;