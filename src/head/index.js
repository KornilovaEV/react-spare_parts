import React from 'react';
import CompMenu from './comp/CompMenu';
import MobMenu from './mob/MobMenu';
import {useMatchMedia} from '../hook/use-match-media';

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