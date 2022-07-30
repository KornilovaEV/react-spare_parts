import React, {useState, useEffect} from 'react';
import {List, ListItemText,ListItemButton, Box } from '@mui/material';
import axios from 'axios';
import {delay} from './basket/Basket'

export default function TypeBar({onChangeSearchInputManuf,}){ 
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/items')
        .then((res) => {setItems(res.data);});
    }, []);

    let arr = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            arr.push(item.manufacturer)
            delay(1000)
        }
        
    return (
        <Box 
        sx={{ 
            bgcolor: '#fffde9',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 500,
            marginTop: 3,
            marginLeft: 3,
            borderRadius: 5,
        }}>
        <h3 className='text-center'>Производители:</h3>
            <List>
                {arr.map((obj, index) => (
                <ListItemButton key={index}>
                    <ListItemText className='text-center'>
                        {obj}
                    </ListItemText>
                </ListItemButton>
                ))}
            </List>
        </Box>
    );
}