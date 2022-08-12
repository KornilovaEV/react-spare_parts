import React from 'react';
import MobCard from "./MobCard";
import CompCard from "./CompCard";
import {useMatchMedia} from '../../hook/use-match-media';

function Card({
  id, 
  title, 
  image, 
  price, 
  articul, 
  customer, 
  onPlus, 
  added, 
  loading = false, }) { 

  const {isMobile} = useMatchMedia();  
  return(
    isMobile? 
    <MobCard 
      id={id} 
      title={title} 
      image={image} 
      price={price} 
      articul={articul} 
      customer={customer} 
      onPlus={onPlus} 
      added={added} 
      loading={loading}/>
    : 
    <CompCard
      id={id} 
      title={title} 
      image={image} 
      price={price} 
      articul={articul} 
      customer={customer} 
      onPlus={onPlus} 
      added={added} 
      loading={loading}/>
  );
}

export default Card;
