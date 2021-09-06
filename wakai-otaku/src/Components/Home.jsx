import React, { useEffect } from 'react';
import { Slider } from './Slider/Slider';
import { MasVistos } from './Animes/MasVistos';

export const Home = () => {

    return (
        <>
            
            <Slider title="Bienvenido a la instructoria de Ingenieria de Software"></Slider>
            <MasVistos></MasVistos>
        </>
    )
}