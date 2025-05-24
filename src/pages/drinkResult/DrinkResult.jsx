import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Dynamically import bottle images
const bottleImages = import.meta.glob('../../assets/images/*.jpg', { eager: true , import: 'default'});

function DrinkResult() {
    const [isFilled, setIsFilled] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const location = useLocation();
    const generatedDrink = location.state || {};

    const bottleImageKey = `../../assets/images/${generatedDrink.bottle_color}.jpg`;

    useEffect(() => {
        console.log("Bottle Image Key: ", bottleImageKey);
        if (bottleImages[bottleImageKey]) {
            setImageSrc(bottleImages[bottleImageKey]);
        } else {
            console.error(`Image not found for color: ${generatedDrink.bottle_color}`);
        }
    }, [bottleImageKey]);

    const handleChange = (e) => {
        const trimmedValue = e.target.value.trim();
        setIsFilled(trimmedValue.length > 0);
    };

    const handleSubmission = () => {};

    const drinkDetails = {
        drink_name: generatedDrink.drink_name || "Unnamed Drink",
        category: generatedDrink.category,
        description: generatedDrink.description || "A refreshing twist for your taste buds!",
    };

    

    return (
        <>
            <div className="absolute top-4 left-4 z-10">
                <BackButton />
            </div>

            <div className="h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="h-3/6 w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-6">

                    {/* Left Panel */}
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-8 text-center space-y-4">
                        <div>
                            <p className="text-lg text-zinc-400">Your Drink</p>
                            <h2 className="text-4xl font-bold text-orange-500">
                                {drinkDetails.drink_name}
                            </h2>
                        </div>
                        <div className="flex-grow flex items-center justify-center mt-2">
                            <img
                                src={imageSrc}
                                alt="Generated Drink"
                                className="w-72 h-auto transform rotate-[15deg] transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>
        
                    {/* Right Panel */}
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg">
                        <div className="flex flex-col items-center w-full h-full justify-center">
                            <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                                Let’s make this drink a reality!
                            </h2>
                            <p className="text-sm text-zinc-300 mb-6 text-center max-w-sm">
                                Insert your email and we’ll reach out to you within 1–2 working days.
                            </p>
                            <TextField
                                label="Email"
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    maxWidth: 320,
                                    mb: 2,
                                    backgroundColor: 'lightgray',
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: isFilled ? '#FF640A' : 'lightgray',
                                        borderWidth: isFilled ? '2px' : '1px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: isFilled ? '#FF640A' : 'lightgray',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF640A',
                                    },
                                    },
                                    '& .MuiInputLabel-root': {
                                    color: isFilled ? '#FF640A' : 'black',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#FF640A',
                                    },
                                }}
                                />

                            <Button
                                variant="contained"
                                onClick={handleSubmission}
                                disabled={!isFilled}
                                sx={{
                                    backgroundColor: isFilled ? '#FF640A' : 'lightgray',
                                    color: isFilled ? 'black' : 'gray',
                                    fontWeight: 'bold',
                                    padding: '10px 28px',
                                    mt: 1,
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: isFilled ? '#A04000' : 'lightgray',
                                    },
                                    '&.Mui-disabled': {
                                        backgroundColor: 'lightgray',
                                        color: 'black',
                                    },
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrinkResult;
