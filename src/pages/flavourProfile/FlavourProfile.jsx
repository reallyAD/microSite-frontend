import React, {useEffect} from 'react';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import {useDrinks} from "../../utils/DrinksProvider.jsx";
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
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <FlavourProfileForm/>
          </div>
        </div>

     </>
    )
  }

  export default FlavourProfile;
