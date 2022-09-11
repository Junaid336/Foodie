import React, {useState, useEffect} from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { loadContacts } from '../Firebase';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Search from './Search'
import ContactList from './ContactList';

const Chats = () => {
    const router = useRouter();
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState(results);
    
    useEffect(()=>{
        const load = async () => {
            await loadContacts(setResults);
        }
         load();
    }, []);

    useEffect(()=>{
        setFilteredResults(results)
    }, [results])

    const onSearchTermChange = (searchTerm) => {
        if(searchTerm !== ''){
            setFilteredResults(results.filter((result)=>{
                return result.lowercaseName.includes(searchTerm.toLowerCase())
            }));
        }else{
            setFilteredResults(results);
        }
    }

    const onContactClick = async contact => {
         router.push(`/chats/${contact.chatId}`);
    }

    return(
            <>
                <Search onSearchTermChange={onSearchTermChange} />
                <ContactList
                contacts={filteredResults}
                onContactClick={onContactClick}
                />
                <Fab
                    color="primary" 
                    aria-label="add"
                    sx={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem'
                    }}
                >
                    <Link href='/chats/new'>
                        <AddIcon />
                    </Link>
                </Fab>
            </>  
    )
}

export default Chats;


