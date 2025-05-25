import { useState, useEffect } from 'react';
import { DrinksContext } from './DrinksContext';


export function DrinksProvider({ children }) {

    // Default state for drink data
    const DefaultDrinksData = {
        name: '',
        purpose: '',
        drinkBase: '',
        flavourProfile: [],
        label: '',
        refines: 2,
        rerolls: 2,
      }

    // Default state for drink image data
    const DefaultDrinkImage = {
        uploadedImage: null,
        labeledBottleImage: null,
    }

  const [drinkData, setDrinkData] = useState(DefaultDrinksData);
  const [drinkImage, setDrinkImage] = useState(DefaultDrinkImage);

   // Log when drinkImage changes
   useEffect(() => {
    console.log("DrinkImage state changed:", drinkImage);
  }, [drinkImage]); 

  return (
    <DrinksContext.Provider value={{ drinkData, setDrinkData, drinkImage, setDrinkImage }}>
      {children}
    </DrinksContext.Provider>
  );
};
