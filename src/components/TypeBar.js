import React, {useContext} from 'react';
import {Box} from '@mui/material';
import AppContext from '../context';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function TypeBar({onClickManufacturer}){ 
    const {items} = useContext(AppContext)
    let arr = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            arr.push(item.manufacturer)
        }
        arr = arr.filter(
            function(item, pos) {
            return arr.indexOf(item) === pos;
        })

    return (
        <Box 
        sx={{ 
            position: 'relative',
            overflow: 'auto',
            maxHeight: 500,
            marginTop: 3,
            marginLeft: 3,
            borderRadius: 2,
        }}>
        <h3 className='text-center'>Производители</h3>
            <FormGroup className="ml-20">
                {arr.map((obj, index) => (
                        <FormControlLabel 
                        control={<Checkbox onClick={() => onClickManufacturer(obj)}/>}
                        key={index} 
                        label={obj} />
                ))}
            </FormGroup>
        </Box>
    );
}

export default TypeBar;