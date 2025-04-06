import React from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import CircularArrowButton from '../../components/CircularArrowButton';

function FlavourProfile() {

    const { toDrinkResultConfirmation } = useGoTo();

    const handleOnClick = () => {
        toDrinkResultConfirmation();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <p>Flavour Profile!</p>
          <CircularArrowButton onClick={handleOnClick} />
        </div>
        
     </>
    )
  }
  
  export default FlavourProfile;