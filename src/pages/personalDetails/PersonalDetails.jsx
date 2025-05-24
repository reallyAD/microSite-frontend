import {useState, useEffect} from 'react';
import { useDrinks } from '../../utils/DrinksProvider';
import BackButton from '../../components/BackButton';
import TextField from '@mui/material/TextField';
import CircularArrowButton from '../../components/CircularArrowButton';
import { useGoTo } from '../../utils/useGoTo';

function PersonalDetails() {

    const { drinkData, setDrinkData } = useDrinks();
    const { toDrinkPurpose } = useGoTo();
    const [isFilled, setIsFilled] = useState(false);

    // Check if the name field is filled 
    useEffect( () => {
        const trimmedName = drinkData?.name?.trim() || '';
        setIsFilled(trimmedName.length > 0);
    }, [drinkData?.name]);

    const handleOnClick = () => {
        toDrinkPurpose();
    }

    const handleOnChange = (e) => {
        const trimmedValue = e.target.value.trim();
        setDrinkData({
            ...drinkData,
            name: e.target.value
        });
        setIsFilled(trimmedValue.length > 0);
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
            <div className="flex-col w-120">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold mb-10">What is your name?</h1>
                    <p className="mb-2 text-lg">Every drink starts with a name</p>
                </div>
                <div className="flex flex-row ml-18 items-center gap-2 mt-4">
                    <TextField
                        sx={{
                            backgroundColor: 'lightgray',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            marginRight: '4px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: isFilled ? '#FF640A' : 'lightgray', // Border color based on isFilled
                                    borderWidth: isFilled ? '2px' : '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor: isFilled ? '#FF640A' : 'lightgray', // Hover state
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: isFilled ? '#FF640A' : 'lightgray', // Focused state
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: isFilled ? '#FF640A' : 'black', // Label color based on isFilled
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: isFilled ? '#FF640A' : 'inherit', // Override default blue label when focused
                            },
                        }}
                        onChange={handleOnChange}
                        id="username"
                        label="Name"
                        variant="outlined"
                        size="small"
                        value={drinkData?.name || ''}
                    />
                    <CircularArrowButton
                        disabled={!isFilled}
                        onClick={handleOnClick}
                    />
                </div>
            </div>
        </div>
     </>
    )
  }

  export default PersonalDetails;
