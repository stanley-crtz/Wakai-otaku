import React from 'react';

export const Slider = ({title}) => {

    return (
        <div id="slider" class="slider-big">
            <h1 class="animate__animated animate__pulse animate__infinite">{title}</h1>
        </div>
    )
}