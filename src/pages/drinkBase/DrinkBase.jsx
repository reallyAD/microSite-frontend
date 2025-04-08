import React, { useEffect } from 'react';
import { useGoTo } from '../../utils/useGoTo';
import BackButton from '../../components/BackButton';
import CircularArrowButton from '../../components/CircularArrowButton';
import {useDrinks} from "../../utils/DrinksProvider.jsx";

function DrinkBase() {

    const { toFlavourProfile } = useGoTo();
    const { drinkData, setDrinkData } = useDrinks();

    useEffect(() => {
        console.log("DRINK DATA IN DRINK BASE: ", drinkData);
    }, []);

    const handleOnClick = () => {
        toFlavourProfile();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">What drink are you looking to create?</h1>
            <p className="text-lg">Pick your base</p>
            <CircularArrowButton onClick={handleOnClick} />
          </div>
        </div>
     </>
    )
  }

  export default DrinkBase;
