import { createContext, useContext } from 'react';

// Create a context for the drink data
export const DrinksContext = createContext();

// Export the custom hook
export function useDrinks() {
  const context = useContext(DrinksContext);
  if (!context) {
    throw new Error('useDrinks must be used within a DrinksProvider');
  }
  return context;
}