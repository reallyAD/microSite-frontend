import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function DrinkResult() {
    const [isFilled, setIsFilled] = React.useState(false);

    const handleChange = (e) => {
        const trimmedValue = e.target.value.trim();
        setIsFilled(trimmedValue.length > 0);
    }

    const handleSubmission = () => {}

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
                <span className="text-xl"> Your Drink</span>
                {/* TODO: Dynamically load in data from Chatgpt */}
                <h1 className="font-bold">
                    <span className="text-deepOrange">{drinkDetails.name}</span>
                </h1>
                <span className="my-20 text-xs"> INSERT IMAGE </span>
                <div className="w-8/12 flex justify-center">
                    <span className="text-lg text-center">{drinkDetails.description}</span>
                </div>

                <span className="my-10 font-bold text-3xl"> Let's make this drink a reality?</span>
                <span className="mb-5 text-lg">Insert your email and we'll reach out to you within 1-2 working days</span>
                <TextField className="mt-4 mb-4"
                        sx={{
                            backgroundColor: 'lightgray',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            width: '60%',
                            marginBottom: '10px',
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
                                color: isFilled ? '#FF640A' : 'inherit', // Label color based on isFilled
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: isFilled ? '#FF640A' : 'inherit', // Override default blue label when focused
                            },
                        }}
                        id="email"
                        label="email"
                        variant="outlined"
                        size="small"
                        onChange = {handleChange}
                    />
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: isFilled ?  '#FF640A' : 'lightgray',
                        color: isFilled ? 'white' : 'red',
                        width: '10%',
                        height: '32px',
                        '&:hover': {
                            backgroundColor: isFilled ?  '#A04000' : 'lightgray',
                        },
                        '&.Mui-disabled': {
                            backgroundColor: 'lightgray', // Ensure the button is visible when disabled
                            color: 'gray', // Adjust text color for disabled state
                        },
                    }}
                    disabled={!isFilled}
                    >
                    Submit
                </Button>
            </div>
        </div>
     </>
    )
  }

  export default DrinkResult;
