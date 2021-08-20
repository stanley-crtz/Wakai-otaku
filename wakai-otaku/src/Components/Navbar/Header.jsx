import React from 'react';
import Kaneki from '../../Assets/images/Kaneki.png'


export const Header = () => {

    return (
        <header id="header">
            <div id="logo">
                <img src={Kaneki} className="app-logo" alt="Logotipo" />
            </div>

            <nav id="menu">
                <ul>
                    <li>
                        <a href="Inicio">Emision</a>
                    </li>
                    <li>
                        <a href="blog.html">Animes</a>
                    </li>
                    <li>
                        <a href="formulario.html">Peliculas</a>
                    </li>
                    <li>
                        <a href="Estrenos">Estrenos</a>
                    </li>
                    <li>
                        <a href="#">Peticiones</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}