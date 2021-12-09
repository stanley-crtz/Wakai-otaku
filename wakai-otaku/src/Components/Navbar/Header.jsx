import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Kaneki from '../../Assets/images/Kaneki.png'
import { Steps, Hints } from 'intro.js-react';


export const Header = () => {

    const [ stateTour, setStateTour ] = useState(false)

    const steps = [
        {
          element: '.subheader',
          intro: 'Aca encontraras los animes mas populares',
          position: 'right',
        },
        {
          element: '.article-item',
          intro: 'puedes hacer click aqui para ir a ver la informacion del anime',
          position: 'bottom',
        },
        {
          element: '.menu-tour',
          intro: 'puedes explorar las diferentes secciones de la plataforma',
          position: 'bottom',
        },
        
      ];

    return (
        <header id="header">

            <Steps
                enabled={stateTour}
                steps={steps}
                initialStep={0}
                onExit={()=> setStateTour(false)}
            />

            <div id="logo">
                <img src={Kaneki} className="app-logo" alt="Logotipo" />
            </div>

            <nav id="menu" >
                <ul className="menu-tour">
                    <li>
                        <NavLink to="/Inicio" activeClassName="activeLink">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Animes" activeClassName="activeLink">Animes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Peliculas" activeClassName="activeLink">Peliculas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Estrenos" activeClassName="activeLink">Estrenos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Peticiones" activeClassName="activeLink">Peticiones</NavLink>
                    </li>
                    <li>
                        <a onClick={()=> setStateTour(true)} >Tutorial</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
