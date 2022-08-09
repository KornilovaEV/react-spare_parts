import React from 'react';
import {useMatchMedia} from '../../../hook/use-match-media';
import CompCard from './CompCard';
import MobCard from './MobCard';

function Card({onRemoveItem, onClickOrder, isLoading}){
  const {isMobile} = useMatchMedia();  
  return (
    isMobile? 
    <MobCard onRemoveItem={onRemoveItem}/>:
    <CompCard 
    isLoading={isLoading} 
    onClickOrder={onClickOrder} 
    onRemoveItem={onRemoveItem}/>
  );
};

export default Card;