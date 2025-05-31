import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import drinkService from '../../api/drinkService';

// Dynamically import bottle images
const bottleImages = import.meta.glob('../../assets/images/*.png', { eager: true , import: 'default'});

function DrinkResult() {
    const [email, setEmail] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');
    
    const [imageSrc, setImageSrc] = useState(null);
    const location = useLocation();
    const generatedDrink = location.state || {};

    const bottleImageKey = `../../assets/images/${generatedDrink.bottle_color}.png`;

    console.log("Generated Drink IN FINAL SCREEN: ", generatedDrink);

    useEffect(() => {
        console.log("Bottle Image Key: ", bottleImageKey);
        if (bottleImages[bottleImageKey]) {
            setImageSrc(bottleImages[bottleImageKey]);
        } else {
            console.error(`Image not found for color: ${generatedDrink.bottle_color}`);
        }
    }, [bottleImageKey]);


    const drinkDetails = {
        drink_name: generatedDrink.drink_name || "Unnamed Drink",
        category: generatedDrink.category,
        description: generatedDrink.description || "A refreshing twist for your taste buds!",
        ingredients: (generatedDrink.ingredients || "").split(',').map(ingredient => ingredient.trim()),
    };

    const handleEmailChange = (props) => {
        const value = props.target.value;
        setEmail(value);
        const trimmedValue = value.trim();
        setIsFilled(trimmedValue.length > 0 && /\S+@\S+\.\S+/.test(trimmedValue));
    }

    const handleSubmission = async () => {
        if (!isFilled) return;

        setIsSubmitting(true);
        setSubmissionStatus('');

        try {
            const emailData = {
                email: email,
                drinkName: drinkDetails.drink_name,
                drinkCategory: drinkDetails.category,
                drinkDescription: drinkDetails.description,
                drinkIngredients: drinkDetails.ingredients,
            };

            await drinkService.sendEmail(emailData);
            setSubmissionStatus('success');
            console.log("Email sent successfully:");
        } catch (error) {
            setSubmissionStatus('error');
            console.error("Error sending email:", error.response ? error.response.data : error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    

    return (
        <>
            <BackButton />
            <div className="bg-black text-white h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 ">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mt-6">
                    {/* Left Panel */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8 text-center space-y-4">
                        <div>
                            <p className="text-lg text-zinc-200">Your Drink</p>
                            <h2 className="text-4xl font-bold text-orange-500">
                                {drinkDetails.drink_name}
                            </h2>
                        </div>
                        <div className="flex-grow flex items-center justify-center mt-2">
                            <img
                                src={generatedDrink.labeledBottleImage || imageSrc}
                                alt="Generated Drink"
                                className="w-48 sm:w-72 h-auto mt-2 rotate-15"
                            />
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-3/4 flex flex-col justify-center items-center bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg">
                        <div className="flex flex-col items-center w-full justify-center gap-y-6 md:gap-y-8">
                            {submissionStatus === 'success' ? (
                                <div className="text-left flex flex-col gap-y-10">
                                    <div className="flex flex-col gap-y-2 ">
                                        <span className="text-white text-3xl font-geist">You've just tried</span>
                                        <span className="text-4xl font-bold font-geist"> The <span className="font-bold text-deepOrange text-4xl">RAD.</span> Drink Experience </span>
                                    </div>
                                    <p>
                                        We're still fine-tuning the magic
                                        so things might shift, change or get better fast.
                                    </p>
                                    <p>
                                        Got a minute?{' '} 
                                        <a href="https://4nnh5aaw1dj.typeform.com/to/Vrm3ENiC?typeform-source=www.google.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-green">Tell us what you think!</span>
                                        </a>
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                                        Let’s make this drink a reality!
                                    </h2>
                                    <div className="items-center flex flex-col w-full max-w-md px-2">
                                        <p className="text-sm text-zinc-300 mb-6 text-center">
                                            Insert your email and we’ll reach out to you within 1–2 working days.
                                        </p>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                width: '100%',
                                                maxWidth: '100%',
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
                                                    // Ensure input text is visible
                                                    input: {
                                                        color: 'black',
                                                    }
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: isFilled ? '#FF640A' : 'black',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#FF640A',
                                                },
                                            }}
                                            id="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            error={submissionStatus === 'error'}
                                        />
                                        {submissionStatus === 'error' && (
                                            <p className="text-red-500 text-sm mb-2">Failed to submit. Please check your email</p>
                                        )}
                                        <Button
                                            variant="contained"
                                            onClick={handleSubmission}
                                            disabled={!isFilled || isSubmitting}
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
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrinkResult;
