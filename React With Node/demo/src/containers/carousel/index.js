import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'; 

// https://www.npmjs.com/package/react-responsive-carousel
export default class DemoCarousel extends Component {
    onChange(){
        alert('Change');
    }
    render() {
        return (
            <Carousel showThumbs={false} showArrows={false} onChange={this.onChange.bind(this)}>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="customlegend">Custom Legend</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
}