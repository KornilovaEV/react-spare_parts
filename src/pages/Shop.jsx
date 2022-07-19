import React, {useState, useEffect} from "react";
import {Grid} from "@mui/material"
import TypeBar from "../components/TypeBar";
import Card from "../components/Card";
import Find from '../head/Find'
import axios from 'axios';


const Shop = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);  
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/items')
        .then((res) => {setItems(res.data);});
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => (Number(item.id) === Number(obj.id) || item.articul === obj.articul)))
        {
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${obj.id}`);
        }
        else{
            axios.post('https://62cec64c486b6ce8264c6981.mockapi.io/cart', obj);
            setCartItems((prev) => [...prev, obj]);
        }
    };
    return (
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
        <div className="d-flex  flex-wrap mt-50">
            {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
                <Card 
                key={index}
                cartItems={cartItems}
                title={obj.title} 
                image={obj.image} 
                price={obj.price} 
                articul={obj.articul}
                onPlus={onAddToCart}
                />                        
            ))} 
        </div>
            </Grid>
        </Grid>
    );
};

export default Shop;