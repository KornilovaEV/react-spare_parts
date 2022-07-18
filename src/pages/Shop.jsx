import React, {useState, useEffect} from "react";
import {Grid} from "@mui/material"
import TypeBar from "../components/TypeBar";
import Card from "../components/Card";
import Basket from './Basket';
import Find from '../head/Find'
import axios from 'axios';


const Shop = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);  
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
    }

    useEffect(() => {
        axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/items')
        .then((res) => {
            setItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                <TypeBar />
                </Grid>
                <Grid item xs={10} className="mt-25 d-flex  flex-wrap">

                <Find 
                    onChangeSearchInput={onChangeSearchInput}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                {items
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => (
                    <Card 
                    key={index}
                    title={obj.title} 
                    image_url={obj.image} 
                    price={obj.price} 
                    articul={obj.articul}
                    onPlus={onAddToCart} />                        
                ))}
                        
                        {false && <Basket cartItems={cartItems}/>}
                </Grid>
            </Grid>
    );
};

export default Shop;