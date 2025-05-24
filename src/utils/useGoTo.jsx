import { useNavigate } from 'react-router-dom';

export const useGoTo = () => {
    const navigate = useNavigate();

    return {
        toHome: () => navigate('/home'),
        toPersonalDetails: () => navigate('/personal-details'),
        toDrinkPurpose: () => navigate('/drink-purpose'),
        toDrinkBase: () => navigate('/drink-base'),
        toFlavourProfile: () => navigate('/flavour-profile'),
        toDrinkResultConfirmation: (generatedDrink) => navigate('/drink-result-confirmation', {state: generatedDrink}),
        toDrinkRefine: (generatedDrink) => navigate('/drink-result-confirmation/refine', {state: generatedDrink}),
        toDrinkResultLabel: (generatedDrink) => navigate('/drink-result-label', {state: generatedDrink}),
        toDrinkResult: (generatedDrink) => navigate('/drink-result', {state: generatedDrink}),
        goBack: () => navigate(-1), // Goes back by 1 page
    };
}