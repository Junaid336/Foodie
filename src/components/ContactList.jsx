import React from 'react';

import {auth} from '../Firebase';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Contact from './Contact';


const ContactList = ({contacts, onContactClick }) => {
    const renderedContacts = contacts.map((contact, index) =>{
        const {name, photoUrl, uid} = contact;
        // console.log(contact);
        if(uid === auth.currentUser.uid)
            return;
        return(
            <div key={index}>
                <Contact
                 name={name}
                 photoUrl={photoUrl}
                 onClick={()=>{onContactClick(contact)}}
                />
                <Divider variant="inset" component="li" />
            </div>
        )
    })
    return(
        <List>
            {renderedContacts}
        </List>
    )
}

export default ContactList;