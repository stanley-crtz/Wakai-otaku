import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink to="Inicio">Emision</NavLink>
                    </li>
                    <li>
                        <NavLink to="blog.html">Animes</NavLink>
                    </li>
                    <li>
                        <NavLink to="formulario.html">Peliculas</NavLink>
                    </li>
                    <li>
                        <NavLink to="Estrenos">Estrenos</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Peticiones</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}