import React from 'react';
import { useDrinks } from '../../utils/DrinksProvider';
import BackButton from '../../components/BackButton';
import TextField from '@mui/material/TextField';
import CircularArrowButton from '../../components/CircularArrowButton';
import { useGoTo } from '../../utils/useGoTo';
import { Diversity2TwoTone } from '@mui/icons-material';

function PersonalDetails() {

    const { drinkData, setDrinksData } = useDrinks();
    const { toDrinkPurpose } = useGoTo();

    const handleOnClick = () => {
        toDrinkPurpose();
    }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl flex justify-center items-center">
            <div className="flex-col">
                <h1 className="font-bold">What is your name?</h1>
                <p className="text">Every drink starts with a name</p>
                <div className="flex flex-row items-center gap-2"> 
                    <TextField 
                        sx={{
                            backgroundColor: 'lightgray',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '75%'
                        }}
                        id="username" 
                        label="Name"
                        variant="outlined"
                        size="small"
                    />
                    <CircularArrowButton onClick={handleOnClick}/>
                </div>
            </div>
        </div>
     </>
    )
  }
  
  export default PersonalDetails;