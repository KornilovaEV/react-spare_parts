import React from 'react';
import styles from '../../Card/Card.module.scss';
import AppContext from '../../../context';
import Card from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {useMatchMedia} from '../../../hook/use-match-media';
import Form from '../Form';



const CompCard = ({onRemoveItem, onClickOrder, register, errors, isValid}) => {
    
    const {isDesktop} = useMatchMedia();  
    const {cartItems, totalPrice} = React.useContext(AppContext)
    const style = isDesktop? 'swim':'';
    const result = (
    <>
    <h1>Вы выбрали:</h1>
    <div className='size'>
    <span>
    <h3>Итоговая сумма: {totalPrice} руб.</h3>
    Количество товаров: <b>{cartItems.length} </b> шт.<br/>

    <button disabled={!isValid} onClick={onClickOrder} className="yellowButton">
        Заказать<img src="/img/arrow.svg" alt="Arrow" />
    </button>

    <div style={{ bottom:20}} className="opacity-6 fontSize13">
    <Checkbox disabled checked 
        sx={{
            color: '#ffc400',
            '&.Mui-checked': {
            color: '#ffc400',
            },
        }}/> 
        Согласен(а) с <a href="/about">условиями доставки</a > и ознакомлен(a) с 
        <a href="/guarantee"> правилами возврата и обмена</a>
    </div>
    </span>
    </div>
    </>
);

    return (
    <>
    <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', borderRadius:'25px',}}>
        <h1>Товары:</h1>
        <div className="mt-25 d-flex  flex-wrap">
            {cartItems.map((obj, index) => (
            <div key={index} className={styles.card}>
            <img width="100%" height={115} src={obj.image ? obj.image : '/img/no_icon.svg'} alt="Products" />
            <h3>{obj.title}</h3>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span><i>Цена:</i></span>
                    <b>{obj.price} руб.</b>
                </div>
                <div>
                    <img
                        className="minus"
                        onClick={() => onRemoveItem(obj.id)}
                        src='/img/btn-remove.svg'
                        alt="Удалить"
                    />
                </div>
            </div>
        </div>
        ))}
        </div>
        </Card>
        <Card variant="outlined" className={style} sx={{m: 1, pl:3, width: '30%', height: 350, borderRadius:'25px',}}>
        {result}</Card> 
        <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', height: 550, borderRadius:'25px',}}>
        <Form register={register} errors={errors}/></Card>
        </>
    );
};

export default CompCard;