import React, {useState, useEffect} from "react";
import {Grid} from "@mui/material"
import TypeBar from "../components/TypeBar";
import Card from "../components/Card";
import Find from '../head/Find'
import axios from 'axios';
import AppContext from '../context';


const Home = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);  
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        async function fetchData() {
            try {
            const cartRespons = await axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/cart');
            const itemsRespons = await axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/items');

            setIsLoading(false);
            setCartItems(cartRespons.data);
            setItems(itemsRespons.data);
                
            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const renderItems = () => {
        const filterItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading? 
            [...Array(10)] :
            filterItems)
        .map((obj, index) => (
            <Card 
            key={index}
            onPlus={(item) => onAddToCart(item)}
            added={cartItems.some((item) =>
                Number(item.id) === Number(obj.id) 
                )}
            loading={isLoading}
            {...obj}
            />                        
        ))
    }

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.id) === Number(obj.id) /*|| item.articul === obj.articul*/)
            if (findItem)
            {
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id) /*|| item.articul !== obj.articul*/));
                await axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${obj.id}`);
                console.log("del")
            }
            else{
                setCartItems((prev) => [...prev, obj]);
                axios.post('https://62cec64c486b6ce8264c6981.mockapi.io/cart', obj);
                console.log("+")
            }
        } catch (error) {
                alert('Ошибка при добавлении в корзину');
                console.error(error);
            };
    };

    console.log("cartItems: ", cartItems)

    return (
        
    <AppContext.Provider value={{items, cartItems,  }} >
        <Grid container spacing={3}>
            <Grid item xs={2}>
            <TypeBar />
            </Grid>
            <Grid item xs={10} className="mt-25">
                <Find
                    onChangeSearchInput={onChangeSearchInput}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className="cartRend d-flex flex-wrap">
                    {renderItems()} 
                </div>
            </Grid>
        </Grid>
        </AppContext.Provider>
    );
};

export default Home;