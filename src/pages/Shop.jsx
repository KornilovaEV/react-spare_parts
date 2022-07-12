import React from 'react';
import {Grid} from '@mui/material'
import TypeBar from '../components/TypeBar';
import Card from '../components/Card/Card';

const Shop = () => {
    return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                <TypeBar/>
                </Grid>
                <Grid item xs={8} className='mt-25 d-flex' >
                    <Card title={'Самый лучший товар в мире'} image_url={'/img/sneakers/1.jpg'} price={123456} articul={'hhebd'} />
                    <Card title={'Самый худший товар в мире'} image_url={'/img/sneakers/2.jpg'} price={-123456789} articul={'feklflker'}/>
                    <Card title={'Самыйпршуколуы'} image_url={'/img/sneakers/3.jpg'} price={6455} articul={'аььа'}/>
                    <Card title={'лкждрпижы'} image_url={'/img/sneakers/4.jpg'} price={489488} articul={'авамви'}/>
                    <Card title={'упкщпшщу'} image_url={'/img/sneakers/5.jpg'} price={2335} articul={'вмчвадж'}/>
                    <Card/>
                </Grid>
            </Grid>
    );
};

export default Shop;