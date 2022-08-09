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
  manufacturer, 
  onPlus, 
  added = false, 
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
      manufacturer={manufacturer} 
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
      manufacturer={manufacturer} 
      onPlus={onPlus} 
      added={added} 
      loading={loading}/>
  );
}

export default Card;
