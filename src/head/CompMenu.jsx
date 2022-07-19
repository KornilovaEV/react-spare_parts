import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import {NavLink} from 'react-router-dom'

function CompMenu(/*Auth */)  {
    const Auth = false;

    let log;
    Auth?(
        log={
            icon: 'Выйти',
            title: 'Выйти из аккаунта',
            href:'/login'
        }
    ):(
        log={
            icon: 'Войти',
            title: 'Войти или зарегистрироваться',
            href:'/login'
        }
    )

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
                </NavLink>

            <div className="justify-between d-flex ml-50 mr-5  pr-15">
                <NavLink  to="/shop">
                    <Tooltip  title="Магазин">
                        <button className="headButton" >Магазин</button>
                    </Tooltip>
                </NavLink>

                <NavLink to="/about">
                    <Tooltip  title="Как связаться">
                        <button className="headButton">Контакты</button>
                    </Tooltip>
                </NavLink>

                <NavLink to="/guarantee">
                    <Tooltip  title="Условия">
                        <button className="headButton">Гарантия<br/>и возврат</button>
                    </Tooltip>
                </NavLink>

                <NavLink to="/basket">
                    <Tooltip  title="Корзина">
                        <div className="d-flex flex-column mt-25 headButton">
                            <ShoppingBasketIcon sx={{fontSize: 40}}/>
                            <span className="flex-row">1205 руб.</span>
                        </div>
                    </Tooltip>
                </NavLink>

                <NavLink to={log.href}>
                    <Tooltip  title={log.title}>
                        <button className="headButton">{log.icon}</button>
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

