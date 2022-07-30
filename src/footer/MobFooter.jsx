import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MobFooter = () => {

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
        <Accordion sx={{backgroundColor:styles.black, color:styles.yellowLight}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:styles.yellowLight}}/>}>
            <h3>Контакты</h3>
            </AccordionSummary>
            <AccordionDetails>
            <h5> Наш контактный телефон &nbsp;&nbsp;
            <a href="tel:+8(925)607-65-44">+8(925)607-65-44</a></h5>
            <h5>Наша почта <a href="xzxzxz">xz@xz</a></h5>
            <h4>График работы:</h4>ежедневно с 8 до 18
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor:styles.black, color:styles.yellowLight}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:styles.yellowLight}}/>}>
            <h3>Доставка</h3>
            </AccordionSummary>
            <AccordionDetails>
            <b>Москва</b> (в пределах МКАД) - в течение рабочего дня<br/>
            <b>Московская область</b> - 1-2 дня<br/>
            <b>Липецк</b> - 1-3 дня<br/>
            <b>Липецкая область</b> - 1-4 дня <br/>
            <b>Все регионы России</b>
            -  «Почты России», крупнейших транспортных компаний, курьерскими службами 
            DPD, СДЭК, пункты выдачи Pickpoint, Boxberry
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor:styles.black, color:styles.yellowLight}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:styles.yellowLight}}/>}>
            <h3>О компании</h3>
            </AccordionSummary>
            <AccordionDetails>
            <h5><NavLink to="https">Мы на ozon</NavLink></h5>
            <div> <span>Способы оплаты: </span>
                
                    <img src='../icon/mir.png' width="60" height="30" alt="mir"/>
                    <img src='../icon/visa.jpg' width="60" height="30" alt="visa"/>
                    <img src='../icon/mastercard.png' width=" " height="40" alt="mastercard"/>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor:styles.black, color:styles.yellowLight}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:styles.yellowLight}}/>}>
            <h3>Гарантии</h3>
            </AccordionSummary>
            <AccordionDetails>
            <h5><NavLink to="/guarantee">
                Условия обмена и возврата вы можете прочитать здесь</NavLink></h5>
            </AccordionDetails>
        </Accordion>
        </Box>
        </Toolbar>
        </footer>
    );

};

export default MobFooter;