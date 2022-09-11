import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Message = ({myMessage, text}) => {

    const messageStyle = myMessage ? {
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        marginLeft: 'auto',
        marginRight: '1rem',
        textAlign: 'right'
    } : {
        bgcolor: '#eeeeee',
        color: 'text.primary',
        marginLeft: '1rem',
        marginRight: 'auto',
    };

    const { bgcolor, color, ...boxStyles} = messageStyle;
    return(
            <Box sx={{
                ...boxStyles,
                margin: '0.5rem'
            }}>
                <Typography
                 variant="body1"
                 sx={{
                    bgcolor,
                    color,
                    borderRadius: '25px',
                    display: 'inline-block',
                    padding: '0.5rem'
                 }}
                >
                    {text}
                </Typography>
            </Box>
    )
}

export default Message;

