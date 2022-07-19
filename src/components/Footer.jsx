import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom'

const Footer = () => {
    const styles = {
        black : '#212121',
        white : '#fafafa',
        yellowLight : '#fffde7',
        yellow : '#ffc400',
    }
    return (
        <footer>
        <Toolbar  sx={{backgroundColor:styles.black, '@media all': {minHeight: 600,} }}>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
            <font color={styles.yellowLight}>
                <h1>
                    Контакты
                </h1>
                <h5> <a href="tel:+8(925)607-65-44" >
                    +8(925)607-65-44</a>
                </h5>
                <h5> <a href="xzxzxz" >
                    xz@xz</a>
                </h5>
                <h5>
                    График работы: ежедневно <br/> с 8 до 18
                </h5> <br/>
                <h1>
                    Способы оплаты
                </h1>
                <div>
                    <img src='../icon/mir.png' width="60" height="30" alt="mir"/>
                    <img src='../icon/visa.jpg' width="60" height="30" alt="visa"/>
                    <img src='../icon/mastercard.png' width=" " height="40" alt="mastercard"/>
                </div>
            </font>
            </Grid>
            <Grid item xs={3}>
            <font color={styles.yellowLight}>
                <h1>
                    Доставка
                </h1>
                <h5>
                    <b><i>Москва</i></b> 
                    (в пределах МКАД)- в течение рабочего дня
                </h5>
                <h5>
                    <b><i>Московская область</i></b> 
                    - 1-2 дня
                </h5>
                <h5>
                    <b><i>Липецк</i></b> - 1-3 дня
                </h5>
                <h5>
                    <b><i>Липецкая область</i></b> - 1-4 дня
                </h5>
                <h5>
                    <b><i>Все регионы России</i></b>
                    -  «Почты России», крупнейших транспортных компаний, курьерскими службами 
                    DPD, СДЭК, пункты выдачи Pickpoint, Boxberry
                </h5>
            </font>
            </Grid>
            <Grid item xs={3}>
            <font color={styles.yellowLight}>
                <h1>
                    О компании
                </h1>
                <h5>
                    Партнерство:
                </h5>
                <h5>
                    <NavLink to="https">
                    Мы на ozon</NavLink>
                </h5>
            </font>
            </Grid>
            <Grid item xs={3}>
            <font color={styles.yellowLight}>
                <h1>
                    Гарантии
                </h1>
                <h5>
                
                <NavLink to="/guarantee">
                Условия обмена и возврата <br/>
                    вы можете прочитать здесь
                </NavLink>
                </h5>
            </font>
            </Grid>
        </Grid>
        </Box>
        </Toolbar>
        </footer>
    );
};

export default Footer;