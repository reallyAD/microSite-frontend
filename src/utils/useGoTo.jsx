import { useNavigate } from 'react-router-dom';

export const useGoTo = () => {
    const navigate = useNavigate();

    return {
        toHome: () => navigate('/home'),
        toPersonalDetails: () => navigate('/personal-details'),
        toDrinkPurpose: () => navigate('/drink-purpose'),
        toDrinkBase: () => navigate('/drink-base'),
        toFlavourProfile: () => navigate('/flavour-profile'),
        toDrinkResultConfirmation: () => navigate('/drink-result-confirmation'),
        toDrinkResultLabel: () => navigate('/drink-result-label'),
        toDrinkResult: () => navigate('/drink-result'),
        goBack: () => navigate(-1), // Goes back by 1 page
    };
}