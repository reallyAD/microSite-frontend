import { createContext, useContext, useState } from 'react';

// Create a context for the drink data
const DrinksContext = createContext();

export const useDrinks = () => useContext(DrinksContext);

export const DrinksProvider = ({ children }) => {

    // Default state for drink data
    const DefaultDrinksData = {
        name: '',
        purpose: '',
        drinkBase: '',
        flavourProfile: [],
        label: '',
      }

  const [drinkData, setDrinkData] = useState(DefaultDrinksData);

  return (
    <DrinksContext.Provider value={{ drinkData, setDrinkData }}>
      {children}
    </DrinksContext.Provider>
  );
};
