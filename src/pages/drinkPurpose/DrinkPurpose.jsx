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
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">What is this drink for?</h1>
            <p className="mt-4">Pick one - we'll tailor the drink to match</p>
            <PurposeForm/>
          </div>
        </div>
     </>
    )
  }

  export default DrinkPurpose;
