import React, { useEffect, useState } from 'react';
import { useDrinks } from "../../../utils/DrinksContext.js";
import { useGoTo } from "../../../utils/useGoTo.jsx";
import ReusableButton from "../../../components/ReusableButton.jsx";
import FlavourSlider from './FlavourSlider.jsx';
import { drinkBaseFlavourProfiles, defaultFlavourProfile } from './flavourProfileData.jsx';
import LoadingPage from '../../../components/Loading.jsx';
import drinkService from "../../../api/drinkService.js";


function FlavourProfileForm () { 

    const { toDrinkResultConfirmation } = useGoTo();
    const { drinkData, setDrinkData } = useDrinks();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isInitialised, setIsInitialised] = useState(false);

    // Get current drink base from drinkData
    const currDrinkBase = drinkData?.drinkBase || "Others";

    console.log("Current drink base: ", currDrinkBase);

    // Initialize flavor profile based on current drink base
    useEffect(() => {
        // If the flavor profile doesn't match the current drink base, reset it
        if (drinkData?.flavourProfile?.length) {
            // Check if the current flavor profile matches the current drink base
            const currentCategories = drinkData.flavourProfile.map(item => item.category);
            const expectedCategories = Object.keys(defaultFlavourProfile[currDrinkBase]);
            
            // If categories don't match, reset to default for current drink base
            const categoriesMatch = expectedCategories.every(cat => currentCategories.includes(cat)) && 
                                   currentCategories.length === expectedCategories.length;
            
            if (!categoriesMatch) {
                // Reset flavor profile to default for current drink base
                const defaultProfile = defaultFlavourProfile[currDrinkBase];
                const structuredFlavourProfile = Object.entries(defaultProfile).map(([category, {intensity, value}]) => ({
                    category,
                    intensity,
                    value
                }));
                
                setDrinkData(prev => ({
                    ...prev,
                    flavourProfile: structuredFlavourProfile
                }));
                
                // Update local state
                setFlavourProfile(defaultProfile);
            }
        } else {
            // Initialize with default flavor profile
            const defaultProfile = defaultFlavourProfile[currDrinkBase];
            setFlavourProfile(defaultProfile);
            
            // Also update global state
            const structuredFlavourProfile = Object.entries(defaultProfile).map(([category, {intensity, value}]) => ({
                category,
                intensity,
                value
            }));
            
            setDrinkData(prev => ({
                ...prev,
                flavourProfile: structuredFlavourProfile
            }));
        }

        setIsInitialised(true);
    }, [currDrinkBase, setDrinkData]);

    const initialFlavourProfile = drinkData?.flavourProfile?.length
        ? Object.fromEntries(drinkData.flavourProfile.map(({ category, intensity, value }) => [category, {intensity, value}]))
        : defaultFlavourProfile[currDrinkBase];

    // Set local state
    const [flavourProfile, setFlavourProfile] = useState(initialFlavourProfile);
    
    // Get current profile based on drink base
    const currentProfile = drinkBaseFlavourProfiles[currDrinkBase] || defaultFlavourProfile;
    
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

    const handleGenerate = async () => {
        const userDrinkData = drinkData;

        console.log("USER DRINK DATA BEFORE SENDING: ", userDrinkData);

        try {
            setIsLoading(true);
            const gptResponse = await drinkService.generateDrink(userDrinkData);
            console.log("GPT RESPONSE: ", gptResponse);

            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Navigate to next page
            toDrinkResultConfirmation(gptResponse);

        } catch (error) {
            console.error("Error generating drink:", error);
        }
    } 

    const handleOnChange = (flavour) => (event, newValue) => {
        console.log(`Slider for ${flavour} changed to`, newValue);

        // Finds intensity values for the selected flavour
        const intensityMap = currentProfile.find(p => p.title === flavour)?.flavourIntensity || {};

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
        console.log("Flavour profile IN RANDOMISED", flavourProfile);
        console.log("Current profile IN RANDOMISED: ", currentProfile);
        const randomisedProfile = Object.fromEntries(
            Object.entries(flavourProfile).map(([key]) => {
                const validValues = [0, 25, 50, 75, 100]; // Allowed values
                const randomValue = validValues[Math.floor(Math.random() * validValues.length)]; // Randomly pick one of the valid values
                const intensityMap = currentProfile.find(p => p.title === key)?.flavourIntensity || {};

                console.log("Intensity map: ", intensityMap, key);
                const label = intensityMap[randomValue];

                return [key, { intensity: label, value: randomValue }];
            })
        );

        console.log("Randomised profile: ", randomisedProfile);
        
        // Update local state
        setFlavourProfile(randomisedProfile);

        // Update global state
        const structuredFlavourProfile = Object.entries(randomisedProfile).map(([category, {intensity, value}]) => ({
            category,
            intensity,
            value,
        }));

        setDrinkData(prev => ({
            ...prev,
            flavourProfile: structuredFlavourProfile
        }));
    }

    if (isLoading) {
        return <LoadingPage message ="We're working our Magic..." />
    }

    if (!isInitialised) {
        return <div> Loading Flavor Profiles...</div>
    }


    return (
        <>
        <div className="mb-10 w-full flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{drinkData.drinkBase || "Others"}</h1>
            <h2 className="font-satoshiBold text-lg sm:text-xl text-gray-300">Select your flavour profile</h2>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 bg-zinc-900 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {currentProfile.map((profile, index) => {
            const sliderValue = flavourProfile[profile.title]?.value ?? 0;
            return (
                <FlavourSlider
                key={index}
                value={sliderValue}
                title={profile.title}
                minLabel={profile.minLabel}
                maxLabel={profile.maxLabel}
                marks={profile.marks}
                onChangeValue={handleOnChange(profile.title)}
                flavourIntensity={profile.flavourIntensity}
                />
            );
            })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <ReusableButton
            onClick={handleOnRandomise}
            text="Surprise me"
            color="green"
            width={140}
            height={36}
            />
            <ReusableButton
            onClick={handleGenerate}
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
