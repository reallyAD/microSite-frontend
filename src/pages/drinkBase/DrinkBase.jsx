import React from 'react';
import { useGoTo } from '../../utils/useGoTo';
import BackButton from '../../components/BackButton';
import CircularArrowButton from '../../components/CircularArrowButton';

function DrinkBase() {

    const { toFlavourProfile } = useGoTo();

    const handleOnClick = () => {
        toFlavourProfile();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <p>Drink Base!</p>
            <CircularArrowButton onClick={handleOnClick} />
        </div>
     </>
    )
  }
  
  export default DrinkBase;