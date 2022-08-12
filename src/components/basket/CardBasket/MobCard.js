import React from 'react';
import styles from '../../Card/Card.module.scss';
import AppContext from '../../../context';
import Checkbox from '@mui/material/Checkbox';
import Form from '../Form'


const MobCard = ({onRemoveItem, isLoading=false, onClickOrder, register, errors, isValid}) => {
  const {cartItems, totalPrice} = React.useContext(AppContext)
  

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

    <div className="opacity-6 fontSize13 mt-15">
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
    <div>
        <div className="mt-25 d-flex  flex-wrap">
            {cartItems.map((obj, index) => (
        <div key={index} className={cartItems.length === 1 ?styles.basket :styles.mobcard}>
            <img width="100%" height={75} src={obj.image ? obj.image : '/img/no_icon.svg'} alt="Products" />
            <span><b>{obj.title}</b></span>
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
        <div className="">
        <Form register={register} errors={errors}/>
        </div>
        <div className="ml-10 mb-20">{result}</div>
        </div>
  );
};

export default MobCard;