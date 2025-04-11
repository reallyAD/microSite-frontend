import React, { useEffect, useState } from 'react';
import { useDrinks } from "../../../utils/DrinksProvider.jsx";
import { useGoTo } from "../../../utils/useGoTo.jsx";
import ReusableButton from "../../../components/ReusableButton.jsx";
import FlavourSlider from './FlavourSlider.jsx';
import LoadingPage from '../../../components/LoadingWizard.jsx';
import wizard from "../../../assets/images/wizard.gif";


function FlavourProfileForm () {

    const defaultFlavourProfile = {
        Chocolatey: {
            intensity: "Balanced",
            value: 50
        },
        Nutty: {
            intensity: "Balanced",
            value: 50
        },
        Fruity: {
            intensity: "Balanced",
            value: 50
        },
        Acidity: {
            intensity: "Balanced",
            value: 50
        },
        Floral: {
            intensity: "Balanced",
            value: 50
        },
        Sweet: {
            intensity: "Balanced",
            value: 50
        }
    }

    const profiles = [
        {
            title: "Chocolatey",
            minLabel: "Subtle",
            maxLabel: "Rich",
            marks: [
                {
                    label: "Subtle",
                    value: 0
                },
                {
                    label: "Rich",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Subtle",
                25: "Less Subtle",
                50: "Balanced",
                75: "Less Rich",
                100: "Rich"
            }
        },
        {
            title: "Acidity",
            minLabel: "Smooth",
            maxLabel: "Zesty",
            marks: [
                {
                    label: "Smooth",
                    value: 0
                },
                {
                    label: "Zesty",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Smooth",
                25: "Less Smooth",
                50: "Balanced",
                75: "Less Zesty",
                100: "Zesty"
            }
        },
        {
            title: "Nutty",
            minLabel: "Hints",
            maxLabel: "Roasted",
            marks: [
                {
                    label: "Hints",
                    value: 0
                },
                {
                    label: "Roasted",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Hints",
                25: "Less Hints",
                50: "Balanced",
                75: "Less Roasted",
                100: "Roasted"
            }
        },{
            title: "Floral",
            minLabel: "Delicate",
            maxLabel: "Fragrant",
            marks: [
                {
                    label: "Delicate",
                    value: 0
                },
                {
                    label: "Fragrant",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Delicate",
                25: "Less Delicate",
                50: "Balanced",
                75: "Less Fragrant",
                100: "Fragrant"
            }
        },
        {
            title: "Fruity",
            minLabel: "Light",
            maxLabel: "Juicy",
            marks: [
                {
                    label: "Light",
                    value: 0
                },
                {
                    label: "Juicy",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Light",
                25: "Less Light",
                50: "Balance",
                75: "Less Juicy",
                100: "Fragrant"
            }
        },
        {
            title: "Sweet",
            minLabel: "Subtle",
            maxLabel: "Sweet",
            marks: [
                {
                    label: "Subtle",
                    value: 0
                },
                {
                    label: "Sweet",
                    value: 100
                }
            ],
            flavourIntensity: {
                0: "Subtle",
                25: "Less Subtle",
                50: "Balanced",
                75: "Less Sweet",
                100: "Sweet"
            }
        }
    ];


    const { toDrinkResultConfirmation } = useGoTo();
    const { drinkData, setDrinkData } = useDrinks();
    const [isLoading, setIsLoading] = React.useState(false);

    const initialFlavourProfile = drinkData?.flavourProfile?.length
        ? Object.fromEntries(drinkData.flavourProfile.map(({ category, intensity, value }) => [category, {intensity, value}]))
        : defaultFlavourProfile;

    const [flavourProfile, setFlavourProfile] = useState(initialFlavourProfile);

    useEffect(() => {
        console.log("Flavour Profile IN FORM: ", flavourProfile);
    }, [flavourProfile]);

    useEffect(() => {
        console.log("DRINK DATA IN FLAVOUR PROFILE FORM: ", drinkData);
    }, [drinkData]);

    const findClosestIntensityValue = (value, validValues) => {
        return validValues.reduce((prev, curr) => {
            return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
        });
    };

    const handleOnClick = async () => {
        const structuredFlavourProfile = Object.entries(flavourProfile).map(([category, {intensity, value}]) => ({
            category,
            intensity,
            value
        }));
 
        setDrinkData(prev => ({
            ...prev,
            flavourProfile: structuredFlavourProfile
        }));

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Navigate to next page
        toDrinkResultConfirmation();
    }


    const handleOnChange = (flavour) => (event, newValue) => {
        console.log(`Slider for ${flavour} changed to`, newValue);

        // Finds intensity values for the selected flavour
        const intensityMap = profiles.find(p => p.title === flavour)?.flavourIntensity || {};

        // Finds the closest intensity value from the slider
        const closestValue = findClosestIntensityValue(newValue, Object.keys(intensityMap).map(Number));

        // Retrieve the label from the intensity map based on the value
        const label = intensityMap[closestValue];

        // Update local state
        const updatedProfile = {
            ...flavourProfile,
            [flavour]: {
                intensity: label,
                value: newValue,
            },
        };
        setFlavourProfile(updatedProfile);

        // Immediately update global state as well
        const structuredFlavourProfile = Object.entries(updatedProfile).map(([category, {intensity, value}]) => ({
            category,
            intensity,
            value,
        }));

        setDrinkData(prev => ({
            ...prev,
            flavourProfile: structuredFlavourProfile
        }));
    }

    const handleOnRandomise = () => {
        const randomisedProfile = Object.fromEntries(
            Object.entries(flavourProfile).map(([key]) => {
                const validValues = [0, 25, 50, 75, 100]; // Allowed values
                const randomValue = validValues[Math.floor(Math.random() * validValues.length)]; // Randomly pick one of the valid values
                const intensityMap = profiles.find(p => p.title === key)?.flavourIntensity || {};
                const label = intensityMap[randomValue];

                return [key, { intensity: label, value: randomValue }];
            })
        );

        setFlavourProfile(randomisedProfile);
    }

    if (isLoading) {
        return <LoadingPage gif={wizard} message ="We're working our Magic..." />
    }


    return (
        <>
            <div className="mb-8">
                <div className="text-3xl flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold mb-4">{drinkData.drinkBase || "Others"}</h1>
                        <h2 className="font-satoshiBold mb-14">Select your flavour profile</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-34 gap-y-2">
                    {profiles.map((profile, index) => (
                        <FlavourSlider
                            key={index}
                            value={flavourProfile[profile.title].value}
                            title={profile.title}
                            minLabel={profile.minLabel}
                            maxLabel={profile.maxLabel}
                            marks={profile.marks}
                            onChangeValue={handleOnChange(profile.title)}
                            flavourIntensity={profile.flavourIntensity}
                        />
                    ))}

                </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-4">
                <ReusableButton
                    onClick={handleOnRandomise}
                    text="Surprise me"
                    color="green"
                    width={140}
                    height={36}
                />
                <ReusableButton
                    onClick={handleOnClick}
                    text="Generate"
                    color="pink"
                    width={140}
                    height={36}
                />
            </div>

        </>
    );
}

export default FlavourProfileForm;
