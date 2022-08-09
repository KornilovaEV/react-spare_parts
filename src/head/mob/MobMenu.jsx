import React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink, useNavigate} from 'react-router-dom'
import AppContext from '../../context';
import Find from './Find';

export default function MobMenu() {
    const { setSearchValue} = useContext(AppContext)
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }
    const navigate = useNavigate();
    const goShop = () => navigate('/')
    return (
        <AppBar position="static">
            <Toolbar sx={{'backgroundColor': '#ffc400'}}>
                <NavLink  to="/mobmenu">
                    <MenuIcon sx={{color: "#fffde7"}}/>
                </NavLink>

                <Find onChangeToShop={goShop} onChangeSearchInput={onChangeSearchInput} />
            </Toolbar>
        </AppBar>
    );
}
