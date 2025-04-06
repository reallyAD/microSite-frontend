import React from 'react';
import { useGoTo } from '../utils/useGoTo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function BackButton() {
    const { goBack } = useGoTo();

    return (
        <IconButton style={{ color: 'white' }}>
            <ArrowBackIcon onClick={goBack} />
        </IconButton>
    );
}

export default BackButton;