import React from 'react';
import { useGoTo } from '../utils/useGoTo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function BackButton() {
    const { goBack } = useGoTo();

    return (
        <IconButton 
            style={{ 
                color: 'white', 
                position: 'fixed', 
                marginTop: 52,
                marginLeft: 42,
            }}>
            <ArrowBackIcon onClick={goBack} />
        </IconButton>
    );
}

export default BackButton;