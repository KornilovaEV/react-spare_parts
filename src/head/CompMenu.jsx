import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material'
import {Find} from './Find'

function CompMenu(/*Auth */)  {
    let icon;
    const Auth = false;
    Auth?(
        icon = 'Выйти'
    ):(
        icon = 'Войти'
    )

    return (
        <>
        <header>
        <AppBar position="static">
            <Toolbar sx={{ 'background-color': '#ffc400', '@media all': {minHeight: 100,} }}>
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

            <Find/>
        
            
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
                </Button></Tooltip>
            </Box>
            
            <Box sx={{ flexGrow: 1 }}>
                <Tooltip  title="Войти или зарегистрироваться">
                    <Button sx={{fontSize: 23}} href='/login' color="inherit">{icon}</Button>
                </Tooltip>
            </Box>
            </Box>
        </div>
        </Toolbar>
        </AppBar>
        </header>
        </>
    );
}

export default CompMenu;