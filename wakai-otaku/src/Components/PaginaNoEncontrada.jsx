import React from 'react';
import A from '../Assets/images/A.jpg'

export const PaginaNoEncontrada = () => {

    return(
        <>
            <section id="content">
                <img className="img404" src={A} alt="Willy" />

                <h2 className="subTitle">No se encontro la pagina</h2>
            </section>

        </>
    )
}