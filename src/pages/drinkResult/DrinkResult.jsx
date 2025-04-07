import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function DrinkResult() {

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-2xl"> Your Drink</p>
                {/* TODO: Dynamically load in data from Chatgpt */}
                <h1 className="font-bold">Gateau Opera Latte</h1>
                <p className="my-20"> INSERT IMAGE </p>
                <div className="w-8/12">
                    <p className="text-lg"> Inspired by the French layered almond cake -a harmonious blend of almond, chocolate and coffee</p>
                </div>

                <p className="my-10 font-bold text-3xl"> Let's make this drink a reality?</p>
                <p className="mb-5 text-lg">Insert your email and we'll reach out to you within 1-2 working days</p>
                <TextField 
                        sx={{
                            backgroundColor: 'lightgray',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '75%',
                            marginBottom: '10px'
                        }}
                        id="email" 
                        label="email"
                        variant="outlined"
                        size="small"
                    />
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