import React, {useState} from 'react';
import {useRouter} from 'next/router';
import { searchUser, createNewChat } from '../Firebase';

import Search from './Search';
import ContactList from './ContactList';
import NoContent from './NoContent';

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
            {
                results.length > 0
                ? <ContactList
                    contacts={results}
                    onContactClick={onContactClick}
                    />
                : <NoContent text='No Results' />
            }
        </>
    )
}

export default AddNewContact;