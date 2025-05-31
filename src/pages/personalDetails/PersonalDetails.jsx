import {useState, useEffect} from 'react';
import { useDrinks } from '../../utils/DrinksContext.js';
import BackButton from '../../components/BackButton';
import TextField from '@mui/material/TextField';
import CircularArrowButton from '../../components/CircularArrowButton';
import { useGoTo } from '../../utils/useGoTo';

function PersonalDetails() {

    const { drinkData, setDrinkData } = useDrinks();
    const { toDrinkPurpose } = useGoTo();
    const [isFilled, setIsFilled] = useState(false);

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
        <div className="bg-black text-white min-h-screen w-full flex flex-col justify-center items-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold mb-6">What is your name?</h1>
                    <p className="mb-4 text-lg">Every master brewer has a name</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 mt-4">
                    <TextField
                        sx={{
                            backgroundColor: '#414146',
                            color: 'white',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '75%',
                            marginRight: '4px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FF640A', 
                                    borderWidth: isFilled ? '2px' : '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor:'#FF640A', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor:'#FF640A',
                                },
                                '& input': {
                                    color: 'white',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color:'white', 
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color:'#FF640A', 
                            },
                        }}
                        onChange={handleOnChange}
                        id="username"
                        label="Name"
                        variant="outlined"
                        size="small"
                        value={drinkData?.name || ''}
                    />
                </div>
                <div className="flex justify-center mt-6">
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
