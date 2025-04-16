import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function DrinkResult() {

    const drinkDetails = {
        name: "Gateu Opera Latte",
        description: "Inspired by the French layered almond cake - a harmonious blend of almond, chocolate and coffee",
        ingredients: ["Coffee", "Honey", "Roasted Almond", "Cocoa", "Milk"],
        tasteProfile: ["Sweet", "Nutty", "Chocolatey"],
      }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-2xl"> Your Drink</p>
                {/* TODO: Dynamically load in data from Chatgpt */}
                <h1 className="font-bold">
                    <span className="text-deepOrange">{drinkDetails.name}</span>
                </h1>
                <p className="my-20"> INSERT IMAGE </p>
                <div className="w-8/12">
                    <p className="text-lg text-center">{drinkDetails.description}</p>
                </div>

                <p className="my-10 font-bold text-3xl"> Let's make this drink a reality?</p>
                <p className="mb-5 text-lg">Insert your email and we'll reach out to you within 1-2 working days</p>
                <TextField className="mt-4 mb-4"
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
                        backgroundColor: '#FF640A',
                        '&:hover': {
                        backgroundColor: '#A04000',
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
