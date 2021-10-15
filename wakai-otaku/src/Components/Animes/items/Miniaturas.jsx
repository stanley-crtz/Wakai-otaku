import React from 'react';
import {Link} from 'react-router-dom';

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
            <Link to={`/Anime/${dataAnime.id}`}>Leer más</Link>

            <div className="clearfix" ></div>
        </article>
    )
}
