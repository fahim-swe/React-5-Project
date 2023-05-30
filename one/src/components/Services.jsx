import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';


import '../styles/services.scss';


export default function Services() {
  return (
    <div className="service">
        
        <Carousel
            infiniteLoop
            autoPlay
            showStatus = {false}
            showArrows = {true}
            interval={1000}
            showThumbs = {false}

            
            >
            <div>
                <img className='item' src={img1} alt="item1" />
                <p className="legend">Full Statck</p>
            </div>

            <div>
                <img src={img2} alt="item1" />
                <p className="legend">Peer-to-Peer Support</p>
            </div>


        </Carousel>

    </div>
  )
}
