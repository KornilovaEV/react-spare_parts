import React from 'react';
import CompFooter from './CompFooter';
import MobFooter from './MobFooter';
import {useMatchMedia} from '../hook/use-match-media';

function Footer() {
    const {isDesktop} = useMatchMedia();
    return (
    isDesktop?
    <CompFooter/>
    :
    <MobFooter/>
    );
}

export default Footer;