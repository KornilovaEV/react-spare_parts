import React from 'react';
import {NavLink} from 'react-router-dom'

const Notfoundpage = () => {
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex clear">
            <div className=" Notfound">
                Упс, что-то вы зашли не туда :( <br/>     
                    <img width="80%" src="/img/sadCat.jpg" alt="Грустный котик" />
            </div>
            <div className="bottom10proc">
            <NavLink to='/'>
                <button className="ToShopBotton">
                    Вернуться в магазин
                </button>
            </NavLink>
            </div>
        </div>
    );
};

export default Notfoundpage;