import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Info from '../Info';
import AppContext from '../../context';
import Cards from './CardBasket/Card';
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Basket() {
    const { setIsLoading, isLoading,  
        cartItems, setCartItems, 
    } = useContext(AppContext)


    const [isOrderComplete, setIsOrderComplete] = useState(false); 
    const [orderId, setOrderId] = useState(null) 

    const onClickOrder = React.useCallback(
        async () => {
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
    }, [])

    const onRemoveItem = (id) => {
        try {
        axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${id}`);
        delay(500)
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            alert('Ошибка при удалении из корзины');    
            console.error(error);
        }
    }


    return (
        isLoading? 
        <div>
        <h1 className="text-center bottom10proc cartRend">Идет загрузка, подождите пару минуток пожалуйста :)</h1>
        </div>
        :
        <div>
        <h1 className="text-center">Ваша корзина</h1>
        <Box className='justify-between'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {
                    cartItems.length>0 ?
                    (<Cards onRemoveItem={onRemoveItem}  onClickOrder={onClickOrder} />    
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