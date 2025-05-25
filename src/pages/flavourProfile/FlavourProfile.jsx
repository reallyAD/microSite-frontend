import React, {useEffect} from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import {useDrinks} from "../../utils/DrinksContext.js";
import FlavourProfileForm from './components/FlavourProfileForm.jsx';

function FlavourProfile() {

    const { toDrinkResultConfirmation } = useGoTo();

    const { drinkData } = useDrinks();

    useEffect(() => {
        console.log("DRINK DATA IN FLAVOUR PROFILE: ", drinkData);
    }, []);


    const handleOnClick = () => {
        toDrinkResultConfirmation();
    }

    return (
      <>
        <BackButton />
        <div className="bg-black text-white h-screen w-full flex flex-col pt-24 px-4 pb-6">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center overflow-y-auto">
            <FlavourProfileForm />
          </div>
        </div>
     </>
    )
  }

  export default FlavourProfile;
