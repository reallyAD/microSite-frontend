import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkResultConfirmation() {

    const { toDrinkResultLabel } = useGoTo();

    const handleOnClick = () => {
        toDrinkResultLabel();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <p>Drink result confirmation!</p>
          <CircularArrowButton onClick={handleOnClick}/>
        </div>
     </>
    )
  }
  
  export default DrinkResultConfirmation;