import React, {useState, useEffect} from 'react';

// import KeyboardReturnSharpIcon from '@mui/icons-material/KeyboardReturnSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Radio from '@mui/material/Radio';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { display } from '@mui/system';

const colors = {
  completed: '#388e3c',
  inProgress: '#2196f3',
  pending: '#616161'
}


const Status = ({status}) => {
  if(status === 'pending')
    {
      return <PanoramaFishEyeIcon color='text.primary' />
    } else if( status === 'inProgress'){
      return <TrackChangesIcon color='primary' />
    } else {
      return <CheckCircleIcon color='success' />
    }
}

const Todo = ({todo}) => {
    const [status, setStatus] = useState('');
    console.log(status);
    useEffect(()=>{
      setStatus(todo.status)
    },[])

    const changeStatus = () => {
     if(status ==='pending'){
      setStatus('inProgress');
     } else if(status === 'inProgress') {
      setStatus('completed');
     } else if(status === 'completed') {
      setStatus('pending');
     }
    }

    return(
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteSharpIcon sx={{fontSize: '2rem'}} />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <div style={{
                  // backgroundColor: 'black',
                  height: '1.5rem',
                  width: '1.5rem',
                  borderRadius: '50%',
                  padding: '0.8rem',
                  border: `0.2rem solid ${colors[todo.status]}`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <Status status={todo.status} />
                </div>
              </ListItemIcon>
              <ListItemText
               primary={todo.text} 
               primaryTypographyProps={{
                variant: 'h6'
              }}
              />
            </ListItemButton>
          </ListItem>
    );
}

export default Todo;