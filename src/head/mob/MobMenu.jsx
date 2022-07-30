import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'

export default function MobMenu() {
    return (
        <AppBar position="static">
            <Toolbar sx={{'backgroundColor': '#ffc400'}}>
                <NavLink  to="/mobmenu">
                    <MenuIcon sx={{color: "#fffde7"}}/>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}
