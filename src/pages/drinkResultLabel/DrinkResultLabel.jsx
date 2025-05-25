import React, { useState, useEffect, useRef, use } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { useGoTo } from '../../utils/useGoTo';
import ResusableButton from '../../components/ReusableButton';
import Dropzone from 'react-dropzone';
import ConfirmationModal from './components/ConfirmationModal';
import { useDrinks } from "../../utils/DrinksContext.js";

// Dynamically import bottle images
const bottleImages = import.meta.glob('../../assets/images/*.png', { eager: true , import: 'default'});

function DrinkResultLabel() {
    const location = useLocation();
    const generatedDrink = location.state || {};
    const { toDrinkResult } = useGoTo();
    const { drinkImage, setDrinkImage } = useDrinks();

    const [imageSrc, setImageSrc] = useState(null);
    const [showClearModal, setShowClearModal] = useState(false);

    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const bottleImageKey = `../../assets/images/${generatedDrink.bottle_color}.png`;

    // To set the bottle color
    useEffect(() => {
        console.log("Bottle Image Key: ", bottleImageKey);
        if (bottleImages[bottleImageKey]) {
            setImageSrc(bottleImages[bottleImageKey]);
        } else {
            console.error(`Image not found for color: ${generatedDrink.bottle_color}`);
        }
    }, [bottleImageKey]);


    const drinkDetails = {
      drink_name: generatedDrink.drink_name,
      category: generatedDrink.category,  
      description: generatedDrink.description,
      ingredients: generatedDrink.ingredients,
      taste_profile: generatedDrink.taste_profile,
      bottle_color: generatedDrink.bottle_color,
    } 

    useEffect(() => {
      if (!imageSrc || !drinkImage.uploadedImage) return;
  
      const canvas = canvasRef.current;

      const ctx = canvas.getContext('2d');
  
      const bottleImg = new Image();
      const labelImg = new Image();
  
      bottleImg.src = imageSrc;
      labelImg.src = drinkImage.uploadedImage.preview;
  
      bottleImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bottleImg, 0, 0, canvas.width, canvas.height);
  
        labelImg.onload = () => {
          // Adjust these values to position the label on the bottle
          const labelX = 119;
          const labelY = 139;
          const labelWidth = 76;
          const labelHeight = 98;
          ctx.drawImage(labelImg, labelX, labelY, labelWidth, labelHeight);
        };
      };
    }, [imageSrc, drinkImage.uploadedImage]);

    const handleNextPage = () => {
        toDrinkResult(generatedDrink);
    }

    const handleUploadImage = () => {
        fileInputRef.current?.click();
    }

    const handleFileSelect = (files) => {
        if (files && files.length > 0) {
          const file = files[0];
          const uploadedImageData = Object.assign(file, {
            preview: URL.createObjectURL(file)
          });

          // Update global state with uploaded image
          setDrinkImage(prev => ({
            ...prev,
            uploadedImage: uploadedImageData
          }));

          console.log("File uploaded: ", file);
        } 
    }

    const handleConfirm = () => {
      if (canvasRef.current && drinkImage.uploadedImage) {
          // Convert canvas to data url
          const canvasDataUrl = canvasRef.current.toDataURL('image/jpeg');

          // Update context
          setDrinkImage(prev => ({
            ...prev,
            labeledBottleImage: canvasDataUrl,
          }))

          // Pass canvas image data along with generated drink details
          const generatedDrinkWithLabel = {
            ...drinkDetails,
            labeledBottleImage: canvasDataUrl,
            uploadedImage: drinkImage.uploadedImage.preview 
          }

          toDrinkResult(generatedDrinkWithLabel);
      } else {
        // If no image uploaded, just pass original data
        toDrinkResult(drinkDetails);
      }
    }

    const handleClearImage = () => {
      if (drinkImage.uploadedImage) {
        setShowClearModal(true);
      }
    }

    const handleCancelClearImage = () => {
        setShowClearModal(false);
    }

    const handleConfirmClearImage = () => { 
        // Clean up the object URL to prevent memory leaks
        if (drinkImage.uploadedImage?.preview) {
            URL.revokeObjectURL(drinkImage.uploadedImage.preview);
        }

        // Clear both uploaded and labeled images from context
        setDrinkImage(prev => ({
          ...prev,
          uploadedImage: null,
          labeledBottleImage: null
        }));

        setShowClearModal(false);
      }

    return (
      <>
        <BackButton />
        <div className="h-screen text-3xl text-bold flex justify-center items-center">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold w-8/12 text-center">To make this uniquely yours, add a label to your drink</h1>
            
            <div className="w-full max-w-4xl flex justify-between mt-8">

              {/* Left column */}
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl">Your Drink</span>
                <h2 className="text-3xl font-bold text-deepOrange mt-2">
                  {drinkDetails.drink_name}
                </h2> 

                {drinkImage.uploadedImage ?
                  <canvas ref={canvasRef} width={314} height={314} className="rounded-md shadow-lg w-72 h-auto rotate-15 my-4" />
                  : <img src={imageSrc} alt="Generated Drink" className="w-72 h-auto rotate-15 my-4"/> 
                }
                <span className="w-100 text-lg text-offWhite font-geist">{drinkDetails.description}</span>
              </div>

              {/* Right column */}
              <div className="w-1/2 text-center space-y-10 flex flex-col items-center rounded-2xl bg-zinc-900 p-8">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileSelect(e.target.files)}
                  />

                  <Dropzone
                    accept={{ 'image/*': [] }}
                    maxFiles={1}
                    onDrop={handleFileSelect}
                  >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="mt-2 w-full h-80  border-2 border-dashed border-gray-500 rounded-xl flex justify-center items-center cursor-pointer"
                    >
                      <input {...getInputProps()} />
                      <p>Drag & drop or click to select an image</p>
                    </div>
                  )}
                </Dropzone>
                <div className="flex flex-row items-center justify-between gap-x-16">
                  <div className="flex-col flex items-center justify-between gap-y-4"> 
                    <ResusableButton
                      text={"Upload"} 
                      onClick={handleUploadImage} 
                      color={"green"} 
                      width={140} 
                      height={40} 
                      disabled={false}
                    />

                    {drinkImage.uploadedImage && (
                      <ResusableButton
                        text={"Clear"} 
                        onClick={handleClearImage} 
                        color={"red"} 
                        width={140} 
                        height={40} 
                        disabled={false}
                      />
                    )}
                  </div>
                  
                  <ResusableButton
                    text={"Confirm"} 
                    onClick={handleConfirm} 
                    color={"green"} 
                    width={140} 
                    height={40} 
                    disabled={false}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <ResusableButton
                  text={"Skip"} 
                  onClick={handleNextPage} 
                  color={"deepOrange"} 
                  width={50} 
                  height={40} 
                  disabled={false}
              />
            </div>
            
          </div>
        </div>

        {/* Confirmation Modal for Clear */}
        <ConfirmationModal
          isOpen={showClearModal}
          title="Clear Image?"
          message="Are you sure you want to remove the uploaded image? This action cannot be undone."
          confirmText="Clear"
          cancelText="Cancel"
          onConfirm={handleConfirmClearImage}
          onCancel={handleCancelClearImage}
          confirmButtonColor="red"
        />
     </>
    )
  }
  
  export default DrinkResultLabel;