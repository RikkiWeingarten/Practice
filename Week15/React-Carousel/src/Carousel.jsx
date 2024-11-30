import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hongKong from './assets/HongKong.jpg';
import japan from './assets/Japan.webp';
import lasVegas from './assets/las Vegas.webp';
import macao from './assets/Macao.webp';

class ReactCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={hongKong} />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={macao} />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={lasVegas} />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        );
    }
};


export default ReactCarousel;