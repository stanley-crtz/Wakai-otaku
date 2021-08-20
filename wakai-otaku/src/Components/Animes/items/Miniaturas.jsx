import React from 'react';
import Poster from '../../../Assets/images/Poster-tokyoGhoul.jpg'

export const Miniaturas = () => {

    return (

        <article className="article-item" >
            <div className="image-wrap">
                <img src={Poster} alt="Paisaje" />
            </div>

            <h2>Anime de prueba</h2>
            <span className="date">
                Hace 5 minutos
            </span>
            <a href="#">Leer más</a>

            <div className="clearfix"></div>
        </article>
    )
}