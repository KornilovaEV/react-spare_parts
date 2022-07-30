import React, {useContext} from "react";
import {Grid} from "@mui/material"
import TypeBar from "../components/TypeBar";
import Card from "../components/Card";
import Find from '../head/Find'
import axios from 'axios';
import AppContext from '../context';


const Home = () => {
    const {items, isLoading, 
        searchValue, setSearchValue, 
        cartItems, setCartItems 
        } = useContext(AppContext)

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }
    const isItemAdded = (id) => {
        cartItems.some((item) => Number(item.id) === Number(id))
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
            added={isItemAdded(obj && obj.id)}
            loading={isLoading}
            {...obj}
            />                        
        ))
    }    
    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.id) === Number(obj.id) || item.articul === obj.articul)//////////////////////////////////////////
            if (findItem)
            {
                await axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id) || item.articul !== obj.articul));////////////////////////////////////
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

    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
            <TypeBar/>
            </Grid>
            <Grid item xs={10} className="mt-25">
                <Find onChangeSearchInput={onChangeSearchInput} />
                <div className="cartRend d-flex flex-wrap">
                    {renderItems()} 
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;