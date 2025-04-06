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
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            {/* TODO: Make this dynamically load the choice from previous section */}
            <h1 className="font-bold">Coffee</h1>
            <h2>Select your flavour profile</h2>
            <CircularArrowButton onClick={handleOnClick} />
          </div>     
        </div>
        
     </>
    )
  }
  
  export default FlavourProfile;