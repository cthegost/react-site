import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sova from '../assets/sova.jpg';
import bugatti from '../assets/bugatti.jpg';
import vedmak from '../assets/vedmak.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ sova }
                        alt="sova"
                    />
                    <Carousel.Caption>
                        <h3>SOVA EBANAYA</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bugatti }
                        alt="sova"
                    />
                    <Carousel.Caption>
                        <h3>MASHINA ZA MILLION EBANAYA</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ vedmak }
                        alt="sova"
                    />
                    <Carousel.Caption>
                        <h3>DRAKON SUKA EBANIY</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
};