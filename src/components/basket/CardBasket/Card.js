import React from 'react';
import {useMatchMedia} from '../../../hook/use-match-media';
import CompCard from './CompCard';
import MobCard from './MobCard';
import {useForm} from 'react-hook-form';

function Card({onRemoveItem, onClickOrder, isLoading}){
  const {isDesktop} = useMatchMedia();  
  const { register, formState: {errors, isValid }} = useForm({mode: "onBlur"});

  return (
    isDesktop?
    <CompCard 
    isLoading={isLoading} 
    onClickOrder={onClickOrder} 
    onRemoveItem={onRemoveItem}
    register={register}
    errors={errors}
    isValid={isValid}/>
    :
    <MobCard onRemoveItem={onRemoveItem}
    register={register}
    errors={errors}
    isValid={isValid}
    />
  );
};

export default Card;