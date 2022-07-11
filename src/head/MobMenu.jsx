import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Find} from './Find'
import {styled, alpha } from '@mui/material/styles';
    
    export default function MobMenu() {
        return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar sx={{'background-color': '#ffc400',}}>
                <IconButton
                
                size="large"
                edge="start"
                sx={{ mr: 10,  }}
                >
                <MenuIcon  />
                </IconButton>
                <Find />
            </Toolbar>
            </AppBar>
        </Box>
        );
    }


/*
const MobMenu = (Auth ) => {
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
            <Toolbar sx={{ 'background-color': '#61dafb', '@media all': {minHeight: 100,} }}>
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
            
            <TextField 
                sx={{'margin-top': '40px', 
                width: '200px', 
                'margin-left': 'auto',
                
            }} 
                label="Поиск товара" 
                variant="filled" />
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

export {MobMenu};*/