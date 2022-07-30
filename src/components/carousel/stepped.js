import React from 'react';
import {imageCarousel} from './imageCarousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = imageCarousel.map((item) =>
    [<img src={item} width={700} height={350} alt="art" onDragStart={handleDragStart} role="presentation" />,]
    )

const Gallery = () => {
    return (
        <div className="carousel">
        <AliceCarousel autoPlay infinite autoPlayInterval={2000} mouseTracking items={items} />
        </div>
    );
}

export default Gallery;
