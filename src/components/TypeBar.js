import React from 'react';
import {List,ListItem, ListItemText,ListItemButton, Box } from '@mui/material';

export default function TypeBar() { //
    
    return (
        <Box 
        sx={{ 
            bgcolor: '#fffde9',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
            marginTop: 3,
            marginLeft: 3,
            borderRadius: 10,
        }}
        >
    <List>
            <ListItemButton>
            <ListItemText className='text-center'>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>второй</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>второй</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>второй</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText className='text-center'>второй</ListItemText>
            </ListItemButton>
        </List>
        
        </Box>
    );
}






/*
import React, {useContext} from 'react';
import {List, ListItemText,ListItemButton, Box } from '@mui/material';
import {observer} from "mobx-react-lite";
import { Context } from '../index';

const TypeBar= observer(() => {//= () => { //
    const {prod} = useContext(Context)
    return (
        <Box sx={{ 
            width: '100%', 
            bgcolor: '#fffde9',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
            marginTop: 3,
        }}>
            <List>
            {prod.types.map(type =>
            <ListItemButton>
                <ListItemText key={type.id}>{type.name}</ListItemText>
            </ListItemButton>
            )}
        </List>

        <List>
            <ListItemButton >
            <ListItemText>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText>второй</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText>второй</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText>первый</ListItemText>
            </ListItemButton>
            <ListItemButton>
            <ListItemText>второй</ListItemText>
            </ListItemButton>
        </List>
        
        </Box>
    );
})

export default TypeBar;


*/