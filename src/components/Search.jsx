import React, { useEffect, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const Search = ({onSearchTermChange}) => {
    const  [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, 500);

        return ()=>clearTimeout(timer);
    }, [value]);

    useEffect(()=>{
      const search = async (searchTerm) => { await onSearchTermChange(searchTerm);}

        if (debouncedValue)
            search(debouncedValue);
    }, [debouncedValue])

    return(
        <TextField
        label="Search"
        value={value}
        fullWidth
        onChange={(e)=>setValue(e.target.value.trim())}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    )
}

export default Search;