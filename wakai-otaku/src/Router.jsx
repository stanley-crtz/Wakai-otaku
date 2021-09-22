import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Components/Navbar/Header';
import { Footer } from './Components/Footer/Footer';
import { Estrenos } from './Components/Estrenos';
import { PaginaNoEncontrada } from './Components/PaginaNoEncontrada';
import { Pelicula } from './Components/Peliculas';
import { Animes } from './Components/Animes/Animes';
import { Peticiones } from './Components/Peticiones';

export const Router = () => {

    useEffect(()=>{
        setTimeout(() => {
            document.querySelector('body').style.overflow = 'auto'
            document.getElementById('loader').style.display = 'none'
        }, 7000)
    },[])
    
    return(
        <BrowserRouter>
            <section id="loader">
                <div className="loader"></div>
                <div className="loader"></div>
            </section>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Inicio" component={Home}></Route>
                <Route exact path="/Animes" component={Animes}></Route>
                <Route exact path="/Estrenos" component={Estrenos}></Route>
                <Route exact path="/Peliculas" component={Pelicula}></Route>
                <Route exact path="/Peticiones" component={Peticiones}></Route>
                <Route exact path="*" component={PaginaNoEncontrada}></Route>
                
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}