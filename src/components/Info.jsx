import React from 'react';
import {NavLink} from 'react-router-dom';

const Info = ({ title, image, description }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex clear">
      <img className="mb-20 mt-40" width="120px" src={image} alt="Изображение" />
      <h2>{title}</h2>
      <p className="opacity-6" 
        style={{fontSize: '25px'}}
        >{description}
      </p>
      <div className="mb-50">
        <NavLink to="/">
          <button className="ToShopBotton">
            Перейти в магазин
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Info;