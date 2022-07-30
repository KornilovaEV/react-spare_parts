import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import styles from '../Card/Card.module.scss';
import Info from '..//Info';
import Form from './Form'
import AppContext from '../../context';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Basket() {
    const { totalPrice,
        isLoading, setIsLoading,
        cartItems, setCartItems, 
    } = useContext(AppContext)

    const [isOrderComplete, setIsOrderComplete] = useState(false); 
    const [orderId, setOrderId] = useState(null) 

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://62cec64c486b6ce8264c6981.mockapi.io/orders', {
                items:cartItems
            });
            setOrderId(data.id);
            setCartItems([]);
            setIsOrderComplete(true);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/`+ item.id);
                await delay(500)
            }
        } catch (error) {
            alert("Не получилось создать заказ, попробуйте еще раз =(");
        }
        setIsLoading(false);
    }
    const onRemoveItem = (id) => {
        try {
        axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            alert('Ошибка при удалении из корзины');
            console.error(error);
        }
    }

    const card = (
        <>
        <h1>Товары:</h1>
        <div className="mt-25 d-flex  flex-wrap">
            {cartItems.map((obj) => (
                <div key={obj.id} className={styles.card}>
                <img width="100%" height={135} src={obj.image? obj.image : '/img/no_icon.svg'} alt="Products" />
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
        </>
            );
            
    const result = (
        <>
        <h1>Вы выбрали:</h1>
        <div className='size'>
        <span>
        <h3>Итоговая сумма: {totalPrice} руб.</h3>
        Количество товаров: <b>{cartItems.length} </b> шт.<br/>

        <button disabled={isLoading} onClick={onClickOrder} className="yellowButton">
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
            <a href="/guarantee"> правилами возврата и обмена</a>
        </div>
        </span>
        
        
        </div>
        </>
        
    );

    return (
        <div>
        <h1 className="text-center">Ваша корзина</h1>
        <Box className='justify-between'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {
                    cartItems.length >0 ?
                    (
                        <>
                        <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', borderRadius:'25px',}}>
                            {card}</Card>
                        <Card variant="outlined" className='swim' sx={{m: 1, pl:3, width: '30%', height: 400, borderRadius:'25px',}}>
                            {result}</Card>           
                        <Card variant="outlined" sx={{m: 1, pl:3, width: '62%', height: 550, borderRadius:'25px',}}>
                        <Form/></Card>
                        </>
                    ):
                    (
                        <Info
                            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                            description={
                            isOrderComplete
                                ? `Ваш заказ #${orderId} принят. Ожидайте звонка от нашего мененджера.`
                                : 'Добавьте хотя бы один товар, чтобы сделать заказ.'
                            }
                            image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
                        />
                    )
                }
        </Box>
        </div>
    );
}

export default Basket;