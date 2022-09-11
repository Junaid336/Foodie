import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const Contact = ({name, photoUrl, onClick}) => {
    return (
        <>
            <ListItem onClick={onClick} sx={{cursor: 'pointer'}} >
                <ListItemAvatar>
                    <Avatar
                     alt={name} 
                     src={photoUrl}
                     imgProps={{referrerPolicy:'no-referrer'}}
                    />
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItem>
        </>
        
    )
}

export default Contact;