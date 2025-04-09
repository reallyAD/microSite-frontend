import React, { useEffect } from 'react';
import BackButton from '../../components/BackButton';
import { useDrinks } from "../../utils/DrinksProvider.jsx";
import BaseForm from './components/BaseForm.jsx';

function DrinkBase() {

    const { drinkData } = useDrinks();

    useEffect(() => {
        console.log("DRINK DATA IN DRINK BASE: ", drinkData);
    }, []);


    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">What drink are you looking to create?</h1>
            <p className="mt-4">Pick your base</p>
            <BaseForm/>
          </div>
        </div>
     </>
    )
  }

  export default DrinkBase;
