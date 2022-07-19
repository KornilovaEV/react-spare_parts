import React from 'react';
import Button from '@mui/material/Button'

const Info = ({ title, image, description }) => {

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20 mt-40" width="120px" src={image} alt="Изображение" />
      <h2>{title}</h2>
      <p className="opacity-6" 
      style={{fontSize: '25px'}}
      >{description}</p>
      <Button 
      href='/shop'
      sx={{
        color:"#fffde7",
        backgroundColor: '#ffc400',
        width: '50%',
        height: '70px',
        marginTop: '5%',
        marginBottom: '10%',
        fontSize: '25px',
        
        "&:hover": {
          backgroundColor: '#c39c18',
        }
        
        
      }}
      >
        Перейти в магазин
      </Button>
    </div>
  );
};

export default Info;