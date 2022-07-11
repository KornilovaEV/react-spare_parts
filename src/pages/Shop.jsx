import React from 'react';
import {Container} from '@mui/material'
import {Grid} from '@mui/material'
import TypeBar from '../components/TypeBar';
import Card from '../components/Card/Card';
import {TextField} from '@mui/material'

const Shop = () => {
    return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                <TypeBar/>
                </Grid>
                <Grid item xs={8} className='mt-25 d-flex' >
                    <Card/>
                    <Card/>

                </Grid>
            </Grid>
    );
};

export default Shop;