import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import styles from '../components/Card/Card.module.scss';

function Basket({cartItems = []}) {
    const card = (
        <>
            <h1>Товары:</h1>
        <div className="mt-25 d-flex  flex-wrap">
            {cartItems.map((obj) => (
                <div className={styles.card}>
                <img width="100%" height={135} src={obj.image? obj.image : '/img/no_icon.svg'} alt="Products" />
                <h3>{obj.title}</h3>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                    <span><i>Цена:</i></span>
                    <b>{obj.price} руб.</b>
                    </div>
                </div>
                </div>                       
            ))}

        </div>
        </>
            );
            
    const result = (
        <>
        <h1>Вы выбрали:</h1>
        <div className='size'>
        <span>
        <h3>Итоговая сумма: 1205 руб.</h3>
        Количество товаров: <b>3 </b> шт.<br/>

        <button className="yellowButton">
            Заказать<img src="/img/arrow.svg" alt="Arrow" />
        </button>

        <div style={{position:'absolute', bottom:20}} className="opacity-6">
        <Checkbox disabled checked 
            sx={{
                color: '#ffc400',
                '&.Mui-checked': {
                color: '#ffc400',
                },
            }}/> 
            Согласен(а) с <a href="/about">условиями доставки</a > и ознакомлен(a) с 
            <a href="/guarantee">правилами возврата и обмена</a>
        </div>
        </span>
        
        
        </div>
        </>
        
    );

    const info = (
        <h1>Персональные данные:</h1>
    );
    
    return (
        <div>
        <h1 className="text-center">
            Ваша корзина
        </h1>
        <Box
        className='justify-between'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
            >
            <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', borderRadius:'25px',}}>
                {card}</Card>
            <Card variant="outlined" className='swim' sx={{m: 1, pl:3, width: '30%', height: 400, borderRadius:'25px',}}>
                {result}</Card>           
            <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', height: 450, borderRadius:'25px',}}>
                {info}</Card>
        </Box>
        </div>
    );
}

export default Basket;