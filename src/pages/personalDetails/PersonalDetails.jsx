import React from 'react';
import { useDrinks } from '../../utils/DrinksProvider';
import BackButton from '../../components/BackButton';
import TextField from '@mui/material/TextField';
import CircularArrowButton from '../../components/CircularArrowButton';
import { useGoTo } from '../../utils/useGoTo';

function PersonalDetails() {

    const { drinkData, setDrinkData } = useDrinks();
    const { toDrinkPurpose } = useGoTo();

    const handleOnClick = () => {
        toDrinkPurpose();
    }

    const handleOnChange = (e) => {
        setDrinkData({
            ...drinkData,
            name: e.target.value
        });
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
            <div className="flex-col ">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold">What is your name?</h1>
                    <p className="mt-4 mb-2 text-lg">Every drink starts with a name</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <TextField
                        sx={{
                            backgroundColor: 'lightgray',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            marginRight: '4px',
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF640A', // Focused border color
                                    borderWidth: '2px'
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#FF640A' // Focused label color
                            },
                        }}
                        onChange={handleOnChange}
                        id="username"
                        label="Name"
                        variant="outlined"
                        size="small"
                        value={drinkData?.name || ""}
                    />
                    <CircularArrowButton
                        onClick={handleOnClick}
                    />
                </div>
            </div>
        </div>
     </>
    )
  }

  export default PersonalDetails;
