import React from 'react';
import {NavLink} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './MenuMob.module.scss';

function Menu({onClose}) {
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
    <div className={styles.overlay}>
    <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
        Меню<img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Закрыть" />
        </h2>
        <div className="clear">

            <NavLink  to="/">
                <button className={styles.MobMenuButton} onClick={onClose}>Магазин</button>
            </NavLink>

            <NavLink  to="/shop">
                <button className={styles.MobMenuButton} onClick={onClose}>Информация</button>
            </NavLink>

            <NavLink to="/about">
                <button className={styles.MobMenuButton} onClick={onClose}>Контакты</button>
            </NavLink>

            <NavLink to="/guarantee">
                <button className={styles.MobMenuButton} onClick={onClose}>Гарантия<br/>и возврат</button>
            </NavLink>

            <NavLink to="/basket">
                <div className="d-flex ml-10 mt-25 opacity-6" onClick={onClose}>
                    <ShoppingBasketIcon sx={{fontSize: 40, color: "#ffc400"}}/>
                    <span className="ml-15 mt-5" style={{color: '#020202', fontSize: '25px', }}>1205 руб.</span>
                </div>
            </NavLink>

            <NavLink to={log.href}>
                    <button onClick={onClose} className={styles.MobMenuButton}>{log.icon}</button>
            </NavLink>
        </div>
    </div>
    </div>
);
}

export default Menu;