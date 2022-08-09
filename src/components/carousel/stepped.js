import React from 'react';
import {imageCarousel} from './imageCarousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = imageCarousel.map((item, index) => 
    <img key={index} src={item} width={650} height={450} alt="art" onDragStart={handleDragStart} />
    )
const Gallery = () => {
    return (
        <div className="carousel">
        <AliceCarousel autoPlay infinite autoPlayInterval={2000}
        mouseTracking items={items} />
        </div>
    );
}



export default Gallery;
