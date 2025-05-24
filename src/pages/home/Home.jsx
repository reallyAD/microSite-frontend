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
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex-row flex items-center">
              {/* Text Row */}
              <div className="bg-zinc-900 p-10 rounded-2xl transform scale-125">
                

                {/* Header */}
                <div className="mb-14">
                  <h1 className="font-bold text-4xl"> The <span className="text-deepOrange">RAD.</span> </h1>
                  <h1 className>Drink Experience</h1>
                </div>
                
                {/* Inner text */}
                <div className="mb-2">
                  <p>Create a drink that is uniquely yours.</p>
                  <p>From ingredients to flavour - you're in charge.</p>
                  <p>At the end, we'll turn it to a real creation.</p>
                </div>
                
                <Button
                  variant='contained'
                  onClick={handleOnClick}
                  sx={{
                    backgroundColor: '#FF640A', // dark orange
                    color: '#000000',
                    '&:hover': {
                      backgroundColor: '#A04000', // darker on hover
                    },
                    marginTop: '24px',
                    fontWeight: 'bold',
                    textTransform: 'none'
                  }}
                >
                  Let's Start
                </Button>
              </div>

              {/* Image Row */}
              <div className="flex ml-20">   
                  <video
                    autoPlay 
                    loop
                    muted
                    playsInline
                    className="w-180 h-auto"
                    >
                    <source src={whimsicalWizard} type="video/mp4" />
                  </video>
              </div>
          </div>
        </div>

     </>
    )
  }

  export default Home;
