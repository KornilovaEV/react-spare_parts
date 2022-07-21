import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu'; 
    
    export default function MobMenu() {
        const [cartOpened, setCartOpened] = useState(false);

        const onClickMenu = () => {
            setCartOpened(!cartOpened)
        };
        return (
            <AppBar position="static">
            <Toolbar sx={{'backgroundColor': '#ffc400',}}>
            <MenuIcon onClick={onClickMenu}/>

            {cartOpened && (
                <Menu onClose={onClickMenu}/>
            )}
            </Toolbar>
            </AppBar>

        );
    }
