import React from 'react';
import Poster from '../../../Assets/images/Poster-tokyoGhoul.jpg'

export const Miniaturas = ({dataAnime}) => {
    
    return (

        <article className="article-item" >
            <div className="image-wrap">
                <img src={dataAnime.attributes.posterImage.medium} alt="Paisaje" />
            </div>

            <h2>{dataAnime.attributes.canonicalTitle}</h2>
            <span className="date">
                {dataAnime.attributes.episodeCount} - Episodios
            </span>
            <a href="#">Leer más</a>

            <div className="clearfix"></div>
        </article>
    )
}