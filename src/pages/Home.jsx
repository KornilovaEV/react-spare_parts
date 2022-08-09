import React from "react";
import {Grid} from "@mui/material"
import TypeBar from "../components/TypeBar";
import Card from "../components/Card";
import Find from '../head/comp/Find'
import axios from 'axios';
import AppContext from '../context';
import {useMatchMedia} from '../hook/use-match-media';

const Home = () => {
    const {isMobile, isDesktop} = useMatchMedia();
    const [manufacturer, setManufacturer] = React.useState("");

    const {cartItems, setCartItems,
        items, isLoading, 
        searchValue, setSearchValue, 
    } = React.useContext(AppContext);

    const onChangeSearchInput = (event) => {setSearchValue(event.target.value)};

    const onClickManufacturer = (manuf) => { 
        manufacturer !== manuf ? setManufacturer(manuf) : setManufacturer("")};

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => item.articul === obj.articul);
            if (findItem){
                await axios.delete(`https://62cec64c486b6ce8264c6981.mockapi.io/cart/${obj.articul}`);
                setCartItems((prev) => prev.filter((item) => item.articul !== obj.articul));
                console.log("del")
            }
            else{
                setCartItems((prev) => [...prev, obj]);
                axios.post('https://62cec64c486b6ce8264c6981.mockapi.io/cart', obj);
                console.log("+")
            }
        } 
        catch (error) {
            alert('Ошибка при добавлении в корзину');
            console.error(error);
        };
    };

    //filter on card to shop menu 
    const renderItems = () => {
        const filterItemsTitle = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        //Полное совпадание мб сделать на артикул?
        const filterItemsArticle = items.filter((item) => item.articul.toLowerCase().includes(searchValue.toLowerCase()))
        const filterItem = filterItemsTitle.concat(filterItemsArticle);
        const filterItems = filterItem.filter(function (item, pos) {return filterItem.indexOf(item) === pos});
        const filterMan = filterItems.filter((item) => item.manufacturer.includes(manufacturer))

        //checks the variable for affiliation array  
        function checkAvailability(arr, val) {
            return arr.some(function(arrVal) {return val === arrVal;});
        }

        const cartItemsArticuls = cartItems.map((item) => item.articul)
        return (isLoading? [...Array(10)] : filterMan).map((obj, index ) => (
            <Card 
            key={index}
            onPlus={(item) => onAddToCart(item)}
            added={obj && checkAvailability(cartItemsArticuls, obj.articul)}
            loading={isLoading}
            {...obj}
            />                       
        ))
    };

    return (
        isMobile?
            <div className="cartRend d-flex flex-wrap">
                {renderItems()} 
            </div>
            :
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <TypeBar onClickManufacturer={onClickManufacturer}/> 
                </Grid>
                {isDesktop?
                <Grid item xs={10} className="mt-25">
                    <Find onChangeSearchInput={onChangeSearchInput}/>
                    <div className="cartRend d-flex flex-wrap">
                        {renderItems()} 
                    </div>
                </Grid>
                : 
                <Grid item xs={10}>
                <div className="mt-25 d-flex flex-wrap">
                    {renderItems()} 
                </div>
                </Grid>}
            </Grid>
    );
};

export default Home;