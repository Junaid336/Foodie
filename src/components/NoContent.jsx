import React from "react";

import { Typography } from "@mui/material";

const NoContent = ({text}) => {
    return(
        <div
         style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            top: '36%'
         }}
        >
            <Typography 
             variant="h2"
             sx={{
                color:'#757575'
             }}
            >
                {text}
            </Typography>
        </div>
    )
}

export default NoContent;