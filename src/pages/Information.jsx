import * as React from 'react';

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormInfo from '../components/FormInfo'
import Gallery from '../components/carousel/stepped';
import {useMatchMedia} from '../hook/use-match-media';
import {NavLink} from 'react-router-dom'


function Shop() {
    const {isMobile} = useMatchMedia();
    const styles = {
        black : '#212121',
        white : '#fafafa',
        yellowLight : '#fffde7',
        yellow : '#ffc400',
    }

    return (
        <>

        {isMobile?
        <Toolbar  sx={{backgroundColor:styles.black, '@media all': {minHeight: 700,} }}>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            <div className="centers fontSize100proc mt-50">
                Есть вопросы по товару?
                <div className="fontSize90proc">
                Мы поможем Вам подобрать товар или ответим на вопросы,
                которые Вас интересуют!</div>
            </div>
            
            <Typography color={styles.yellowLight} component="div" sx={{ flexGrow: 1, }}>
                <FormInfo/>
            </Typography>
        </Grid>
        </Box>
        </Toolbar>
        :
        <Toolbar  sx={{backgroundColor:styles.black, '@media all': {minHeight: 700,} }}>
        <Box sx={{ width: '100%' }}>
        <Grid container>
            <Grid item xs={6}>
            <div className="centerCell">
                <div className="fontSize100proc">
                Есть вопросы по товару?
                </div>
                <div className="fontSize80proc">
                Мы поможем Вам подобрать товар или ответим на вопросы,
                которые Вас интересуют!
                </div>
            </div>
            </Grid>
            <Grid item xs={6}>
            <Typography color={styles.yellowLight} component="div" sx={{ flexGrow: 1, }}>
                <FormInfo/>
            </Typography>
            </Grid>
        </Grid>
        </Box>
        </Toolbar>}

    
        {isMobile? 
        <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 150,} }}>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}> <div className="fontSize80proc">Цены ниже рыночных</div></Grid>
        <Grid item xs={3}> <div className="fontSize80proc">Работаем в крупнейших маркетплейсах России</div></Grid>
        <Grid item xs={3}> <div className="fontSize80proc">Возврат товара,в случае дефектов</div></Grid>
        <Grid item xs={3}> <div className="fontSize80proc">Доставка по всей стране</div></Grid>
    </Grid>
    </Box>
    </Toolbar>:
    <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 300,} }}>
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={3}> <div className="fontSize90proc">Цены ниже рыночных</div></Grid>
    <Grid item xs={3}> <div className="fontSize90proc">Работаем в крупнейших маркетплейсах России</div></Grid>
    <Grid item xs={3}> <div className="fontSize90proc">Возврат товара,в случае дефектов</div></Grid>
    <Grid item xs={3}> <div className="fontSize90proc">Доставка по всей стране</div></Grid>
</Grid>
    </Box>
    </Toolbar>}
        
    <Toolbar sx={{ backgroundColor:styles.yellow, '@media all': {minHeight: 300,} }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={isMobile ?7:9}>
        <div className="fontSize100proc"><b>
                Покупайте качественные запчасти<br/> прямо сейчас!</b>
        </div></Grid>
        
    <Grid item xs={isMobile ?5:3} className="clear">
        <NavLink to='/'>
        <button className="BlackButton fontSize80proc">
    Перейти в магазин   
    </button></NavLink>
    </Grid>
    </Grid>
    </Toolbar>

    <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 500}, 'justifyContent':"center"}}>
    <div className="size">
    <h1>Товар проверяется на:</h1>
        <ul>
            <i>
                <li>Оригинальность</li>
                <li>Целостность товара и упаковки</li>
                <li>Срок годность</li>
                <li>Отвечал качеству, заверенном производителем</li>
            </i>
        </ul>
    </div>
    </Toolbar>

    <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 400}, 'justifyContent':"center"}}>
    <div className="fontSize100proc ">
    <b>С нами просто и безопасно</b>
    <Gallery/>
    </div>
    </Toolbar>


    <Toolbar sx={{ backgroundColor:styles.yellow, '@media all': {minHeight: 200,} }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={isMobile ?12:9}>
        <div className="fontSize100proc"><b>
        Мы в маркетплейсах:</b>
        </div></Grid>
        
    <Grid item xs={isMobile ?4:3} className="clear">
        <NavLink to='/'>
        <button className="BlackButton fontSize80proc">
    Ozon  
    </button></NavLink>
    </Grid>
    </Grid>
    </Toolbar>

    </>
    );
}

export default Shop;