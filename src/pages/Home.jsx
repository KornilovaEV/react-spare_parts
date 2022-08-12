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
    const [manufacturer, setManufacturer] = React.useState([]);

    const {cartItems, setCartItems,
        items, isLoading, 
        searchValue, setSearchValue, 
    } = React.useContext(AppContext);

    const onChangeSearchInput = (event) => {setSearchValue(event.target.value)};

    const onClickManufacturer = (manuf) => { 
        !manufacturer.includes(manuf) ? setManufacturer((prev) => [...prev, manuf]) 
            :setManufacturer((prev) => prev.filter((item) => item !== manuf))};

    React.useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const onAddToCart = (obj) => {
        try {
            const findItem = cartItems.find((item) => item.id === obj.id);
            if (findItem){
                setCartItems((prev) => prev.filter((item) => item.id !== obj.id));}
            else{
                setCartItems((prev) => [...prev, obj]);}
        } 
        catch (error) {
            alert('Ошибка при добавлении в корзину');
            console.error(error);
        };
    };

    const renderItems = () => {
        
        /*
        const filterItemsTitle = axios.get('/api/products?title='+searchValue.toLowerCase());
        setX(filterItemsTitle.data.results);

        //items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        /*
        const filterItemsArticle = items.filter((item) => item.articul.toLowerCase().includes(searchValue.toLowerCase()))
        //combining the list of articles and titles
        const filterItem = filterItemsTitle.concat(filterItemsArticle);
        //filter on duplicate
        const filterItems = filterItem.filter(function (item, pos) {return filterItem.indexOf(item) === pos});
        //filter on manufacturer

        const filterMan = filterItems.filter((item) => item.manufacturer.includes(manufacturer))
        */

        const isItemAdded = (id) => {
            return cartItems.some((item) => item.id === id);
        };

        console.log(cartItems)

        return (isLoading? [...Array(10)] : items).map((obj, index ) => (
            <Card 
            key={index}
            onPlus={(item) => onAddToCart(item)}
            added={obj && isItemAdded(obj.id)}
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
            <Grid container spacing={3} >
                <Grid sx={{
                    '--Grid-borderWidth': '2px',
                    '& > div': {
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    },
                }} item xs={2}>
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