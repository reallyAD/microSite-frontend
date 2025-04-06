import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';


function DrinkResult() {

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
            <div className="flex flex-col items-center">
                <p>Drink results!</p>
                <Button 
                    variant='contained' 
                    sx={{
                        backgroundColor: '#D35400', // dark orange
                        '&:hover': {
                        backgroundColor: '#A04000', // darker on hover
                        },
                    }}
                    >
                    Submit
                </Button>
            </div>
        </div>
     </>
    )
  }
  
  export default DrinkResult;