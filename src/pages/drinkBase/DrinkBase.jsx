import React, { useEffect } from 'react';
import BackButton from '../../components/BackButton';
import { useDrinks } from "../../utils/DrinksContext.js";
import BaseForm from './components/BaseForm.jsx';

function DrinkBase() {
  const { drinkData } = useDrinks();

  useEffect(() => {
    console.log("DRINK DATA IN DRINK BASE: ", drinkData);
  }, []);

  return (
    <>
      <BackButton />
      <div className="bg-black h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10">
        <div className="w-full max-w-3xl flex flex-col items-center text-center overflow-y-auto">
          <h1 className="font-bold text-2xl sm:text-3xl ">What drink are you looking to create?</h1>
          <p className="mt-4 text-base text-gray-300">Pick your base</p>
          <BaseForm />
        </div>
      </div>
    </>
  );
}

export default DrinkBase;
