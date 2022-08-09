import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import {NavLink} from 'react-router-dom';
import AppContext from '../../context';
import Badge from '@mui/material/Badge';


function CompMenu()  {
    const {totalPrice, cartItems} = useContext(AppContext)

    return (
        <header>
        <AppBar position="static">
            <Toolbar sx={{ backgroundColor: '#ffc400', '@media all': {minHeight: 100,} }}>
            <div className="justify-between d-flex w100p clear">
            <NavLink to="/">
                <Typography variant="h2"
                sx={{ fontStyle: 'oblique',  fontWeight: 'medium', fontFamily: 'Monospace', }}>
                    GlumStore
                </Typography>

                <span style={{fontSize: '23px', marginLeft: 10, fontStyle: 'oblique',  fontWeight: 'medium', fontFamily: 'Monospace',}}>Лучшие товары для вас</span> 
                
                </NavLink>

            <div className="justify-between d-flex ml-50 mr-5 pr-15">
                <NavLink  to="/shop">
                    <Tooltip  title="О нас">
                        <button className="headButton" >Информация</button>
                    </Tooltip>
                </NavLink>

                <NavLink to="/about">
                    <Tooltip  title="Как связаться">
                        <button className="headButton">Контакты</button>
                    </Tooltip>
                </NavLink>

                <a href="/basket">
                    <Tooltip  title="Корзина">
                        <div className="d-flex flex-column mt-25 headButtonIcon">
                            <Badge badgeContent={cartItems.length}>
                                <ShoppingBasketIcon sx={{fontSize: 40}}/>
                            </Badge>
                        <div className='fontSize15'>{totalPrice} руб</div>
                        </div>
                    </Tooltip>
                </a>

                <NavLink to="/guarantee">
                    <Tooltip  title="Условия">
                        <button className="headButton">Гарантия<br/>и возврат</button>
                    </Tooltip>
                </NavLink>
            </div>
            </div>
        </Toolbar>
        </AppBar>
        </header>
    );
}

export default CompMenu;

