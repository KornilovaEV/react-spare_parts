import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function CompMenu(/*Auth */)  {


    let log;
    const Auth = false;
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
            <div style={{ width: '100%' }}>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                borderRadius: 1,
            }}
            >
            <Button href="/"  color="inherit">
                <Typography variant="h2"
                sx={{ fontStyle: 'oblique',  fontWeight: 'medium', fontFamily: 'Monospace', }}>
                GlumStore 
                </Typography>
            </Button>
            </Box>

            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontSize: 18,
                p: 1,
                m: 1,
            }}
            >
            
            <Box sx={{ flexGrow: 1}}>
                <Tooltip  title="Магазин">
                    <Button sx={{ flexGrow: 1, fontSize: 23}} href="/shop" color="inherit">Магазин</Button>
                </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Tooltip  title="Как связаться">
                    <Button sx={{fontSize: 23}} href="/about" color="inherit">Контакты</Button>
                </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Tooltip  title="Условия">
                    <Button  sx={{fontSize: 23}} href='/guarantee' color="inherit">Гарантия и возврат</Button>
                </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1 }} >
                <Tooltip  title="Корзина"><Button color="inherit" href='/basket'>
                    <ShoppingBasketIcon sx={{fontSize: 40}}/>
                    <span>1205 руб.</span>
                </Button></Tooltip>
            </Box>
            
            <Box sx={{ flexGrow: 1 }}>
                <Tooltip  title={log.title}>
                    <Button sx={{fontSize: 23}} href={log.href} color="inherit">{log.icon}</Button>
                </Tooltip>
            </Box>
            </Box>
        </div>
        </Toolbar>
        </AppBar>
        </header>
    );
}

export default CompMenu;