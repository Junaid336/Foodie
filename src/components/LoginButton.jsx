import React from 'react';

import Button from '@mui/material/Button';

const LoginButton = () => {
    return(
        <Button 
         color='error' 
         variant='contained' 
         sx={{
            fontSize: '1rem',
            padding: '1rem',
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)'
         }}
         >
            Login With Google
        </Button>
    );
}

export default LoginButton;