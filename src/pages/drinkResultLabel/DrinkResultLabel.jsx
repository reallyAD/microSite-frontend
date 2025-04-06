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
          <div className="flex flex-col items-center">
            <h1 className="font-bold w-8/12">To make this uniquely yours, add a label to your drink</h1>
            <CircularArrowButton onClick={handleOnClick} />
          </div>
        </div>
     </>
    )
  }
  
  export default DrinkResultLabel;