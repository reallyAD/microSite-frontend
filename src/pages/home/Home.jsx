import React from 'react';
import Button from '@mui/material/Button';
import { useGoTo } from '../../utils/useGoTo';

function Home() {

  const { toPersonalDetails} = useGoTo();

  function handleOnClick() {
    toPersonalDetails();
  }

    return (
      <>
        <div className="h-screen text-3xl flex justify-center items-center">
          <div className="flex-col">
            <p className="font-bold">INSERT IMAGE</p>
            <p> The Rad Experience.</p>
            <p>
              Create a drink that is uniquely yours.
            </p>
            <p>
              From Ingredients to flavour - you're in charge.
            </p>
            <p>
              At the end, we'll turn it to a real creation
            </p>
            <Button 
              variant='contained' 
              onClick={handleOnClick}
              sx={{
                backgroundColor: '#D35400', // dark orange
                '&:hover': {
                  backgroundColor: '#A04000', // darker on hover
                },
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