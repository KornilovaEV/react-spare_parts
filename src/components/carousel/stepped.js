import React from 'react';
import {imageCarousel} from './imageCarousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useMatchMedia} from '../../hook/use-match-media';

const handleDragStart = (e) => e.preventDefault();

const Items = () => {
    const {isMobile} = useMatchMedia();
    return(
        imageCarousel.map((item, index) => 
        <img className={isMobile ? "marginLeft20proc":"ml-50"} key={index} src={item} width={isMobile?200:450} height={isMobile?150:350} alt="art" onDragStart={handleDragStart} />

    ))
}
const Gallery = () => {
    const {isMobile} = useMatchMedia();
    return (
        <div className={isMobile?"carouselMob":"carouselComp"}>
        <AliceCarousel autoPlay  infinite autoPlayInterval={2000}
        mouseTracking items={Items()} /> 
        {// items={items}
        }
        </div>
    );
}



export default Gallery;
