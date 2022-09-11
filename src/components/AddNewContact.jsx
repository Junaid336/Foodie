import React, {useState} from 'react';
import {useRouter} from 'next/router';
import { searchUser, createNewChat } from '../Firebase';

import Search from './Search';
import ContactList from './ContactList';

const AddNewContact = () => {

    const router = useRouter();
    const [results, setResults] = useState([]);

    const onSearchTermChange = async (searchTerm) => {
        await searchUser(searchTerm, setResults)
    }

    const onContactClick = async user => {
        const chatId = await createNewChat(user);
        console.log(chatId);
        router.push(`/chats/${chatId}`);
    }

    return(
        <>
            <Search onSearchTermChange={onSearchTermChange} />
            <ContactList
            contacts={results}
            onContactClick={onContactClick}
            />
        </>
    )
}

export default AddNewContact;