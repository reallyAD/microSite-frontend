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
          <div className="flex-col flex items-center">
            <p className="font-bold my-10">INSERT IMAGE</p>
            <h1 className="font-bold mb-5 text-4xl"> The Rad. Drink Experience.</h1>
            <p className="text-lg">
              Create a drink that is uniquely yours.
            </p>
            <p className="text-lg">
              From Ingredients to flavour - you're in charge.
            </p>
            <p className="text-lg">
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
                marginTop: '20px',
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