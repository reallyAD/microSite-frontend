import React, {useEffect} from 'react';
import BackButton from '../../components/BackButton';
import { useDrinks } from "../../utils/DrinksProvider.jsx";
import PurposeForm from "./components/PurposeForm.jsx";

function DrinkPurpose() {

    const { drinkData } = useDrinks();

    useEffect(() => {
        console.log("DRINK DATA IN DRINK PURPOSE: ", drinkData);
    }, []);

    return (
      <>
        <BackButton />
        <div className="h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10">
          <div className="w-full max-w-3xl flex flex-col items-center text-center overflow-y-auto">
            <h1 className="text-3xl font-bold">What is this drink for?</h1>
            <p className="mt-4 text-base text-gray-300">Pick one – we’ll tailor the drink to match</p>
            <PurposeForm />
          </div>
        </div>
      </>
    );
  }

  export default DrinkPurpose;
