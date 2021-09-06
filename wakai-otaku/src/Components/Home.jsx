import React, { useEffect } from 'react';
import { Slider } from './Slider/Slider';
import { MasVistos } from './Animes/MasVistos';
import { MasPopulares } from './Animes/MasPopulares';

export const Home = () => {

    return (
        <>
            
            <Slider title="ANTENKIU ANIME - El Rincon del Otaku"></Slider>
            <MasPopulares></MasPopulares>
        </>
    )
}