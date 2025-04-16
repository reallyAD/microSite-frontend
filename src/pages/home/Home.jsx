import React from 'react';
import Button from '@mui/material/Button';
import { useGoTo } from '../../utils/useGoTo';
import greenbottle from '../../assets/images/greenbottle.png';
import orangebottle from '../../assets/images/orangebottle.png';

function Home() {

  const { toPersonalDetails} = useGoTo();

  function handleOnClick() {
    toPersonalDetails();
  }

    return (
      <>
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex-col flex items-center">
              {/* Image Row */}
              <div className="flex ml-8 -space-x-28">
                  <img src={greenbottle} alt="Green Bottle" className="w-52 rotate-36 h-auto object-contain" />
                  <img src={orangebottle} alt="Orange Bottle" className="w-52 -rotate-20 h-auto object-contain" />
              </div>
              <h1 className="font-bold mb-5 text-4xl"> The <span className="text-deepOrange">RAD.</span> Drink
                  Experience</h1>
              <p>
              Create a drink that is uniquely yours.
            </p>
            <p>
              From ingredients to flavour - you're in charge.
            </p>
            <p>
              At the end, we'll turn it to a real creation.
            </p>
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
              }}
            >
              Let's Start
            </Button>
          </div>
        </div>

     </>
    )
  }

  export default Home;
