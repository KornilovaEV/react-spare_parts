import React from 'react';
import CompMenu from './CompMenu';
import MobMenu from './MobMenu';
import {useMatchMedia} from '../hook/use-match-media';
import Demo from './mbStyle.tsx';

function Adaptability() {
    const {isDesktop} = useMatchMedia();
    return (
    isDesktop?
    <CompMenu/>
    :
    <MobMenu/>
    );
}

export {Adaptability};