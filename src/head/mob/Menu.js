import React,{useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './MenuMob.module.scss';
import AppContext from '../../context';

function Menu() {
    const {totalPrice} = useContext(AppContext)
    const Auth = false;
    let log;
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

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
        <>
    
    <div className={styles.overlay}>
        <h2 className="d-flex justify-between mb-30">
            Меню<img onClick={goBack} className="cu-p mr-15" src="/img/btn-remove.svg" alt="Закрыть" />
        </h2>
        <div className="clear">
            <NavLink  to="/">
                <button className={styles.MobMenuButton}>Магазин</button>
            </NavLink>

            <NavLink  to="/shop">
                <button className={styles.MobMenuButton}>Информация</button>
            </NavLink>

            <NavLink to="/about">
                <button className={styles.MobMenuButton}>Контакты</button>
            </NavLink>

            <NavLink to="/guarantee">
                <button className={styles.MobMenuButton}>Гарантия<br/>и возврат</button>
            </NavLink>

            <NavLink to="/basket">
                <div className="d-flex ml-10 mt-25 opacity-6">
                    <ShoppingBasketIcon sx={{fontSize: 40, color: "#ffc400"}}/>
                    <span className="ml-15 mt-5" style={{color: '#020202', fontSize: '25px', }}>{totalPrice} руб.</span>
                </div>
            </NavLink>

            <NavLink to={log.href}>
                    <button className={styles.MobMenuButton}>{log.icon}</button>
            </NavLink>

        </div>
    </div>
    </>
);
}

export default Menu;