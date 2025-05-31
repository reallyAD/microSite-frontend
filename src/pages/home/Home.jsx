import React from 'react';
import Button from '@mui/material/Button';
import { useGoTo } from '../../utils/useGoTo';
import whimsicalWizard from '../../assets/whimsical-wizard.mp4';

function Home() {

  const { toPersonalDetails} = useGoTo();

  function handleOnClick() {
    toPersonalDetails();
  }

    return (
      <>
        <div className="h-screen max-h-full flex flex-col justify-center items-center px-4 py-8 md:px-6 lg:px-8 bg-black text-white">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full max-w-6xl">
              <div className="bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl w-full md:w-1/2 text-center md:text-left">
                <div className="mb-10">
                  <h1 className="font-bold text-3xl sm:text-4xl">The <span className="text-deepOrange">RAD.</span></h1>
                  <h2 className="font-bold text-3xl sm:text-4xl">Drink Experience</h2>
                </div>
                <p className="text-base sm:text-lg mb-2">Create a drink that is uniquely yours.</p>
                <p className="text-base sm:text-lg mb-2">From ingredients to flavour — you're in charge.</p>
                <p className="text-base sm:text-lg mb-6">At the end, we'll turn it into a real creation.</p>
                <Button
                  variant='contained'
                  onClick={handleOnClick}
                  sx={{
                    backgroundColor: '#FF640A',
                    color: '#000000',
                    '&:hover': { backgroundColor: '#A04000' },
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '10px 24px',
                  }}
                >
                  Let's Start
                </Button>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center sm:pt-0 pt-12">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-48 sm:w-70 md:w-78 lg:w-180 h-auto rounded-xl shadow-md"
                >
                  <source src={whimsicalWizard} type="video/mp4" />
                </video>
              </div>
          </div>
          <footer className="pt-8 text-xs text-center sm:text-sm">You're exploring an early version of our Drink Creator — things are still in the works</footer>
        </div>

     </>
    )
  }

  export default Home;
