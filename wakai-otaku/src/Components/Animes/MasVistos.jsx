import React from 'react';
import { Miniaturas } from './items/Miniaturas';

export const MasVistos = () => {

    return (
        <section id="content">
            <h2 className="subheader">Animes mas vistos</h2>

            <div id="articles">
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
                <Miniaturas></Miniaturas>
            </div>

        </section>
    )
}