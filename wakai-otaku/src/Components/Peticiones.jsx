import React from "react";
import { Slider } from "./Slider/Slider";
import { FormMessage } from "./Peticiones/FormMessage";
import { Foro } from "./Peticiones/Foro";

export const Peticiones = () => {

    return (
        <div>
            <Slider title='Peticiones de Animes, Peliculas y Ovas' ></Slider>
            <section id='content'>
                <h2 className="littleTitle">Aqui podras escribir que animes quieres que incluyamos a nuestra plataforma</h2>

                <FormMessage></FormMessage>
                <Foro></Foro>
                
            </section>
        </div>
    )
}