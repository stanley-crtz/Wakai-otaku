import React from 'react';
import { Slider } from './Slider/Slider';
import { Miniaturas } from './Animes/items/Miniaturas';

export const Estrenos = () => {

    return (
        <>
            
            <section id="content">
                <h2 className="subheader">Estrenos mas recientes</h2>

                <div id="articles">
                    <Miniaturas></Miniaturas>
                    <Miniaturas></Miniaturas>
                    <Miniaturas></Miniaturas>
                    <Miniaturas></Miniaturas>
                    <Miniaturas></Miniaturas>
                    <Miniaturas></Miniaturas>
                </div>

            </section>
        </>
    )
}