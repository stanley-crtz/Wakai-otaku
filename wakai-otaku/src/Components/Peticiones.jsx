import React from "react";
import { Slider } from "./Slider/Slider";
import { FormMessage } from "./Peticiones/FormMessage";
import { Foro } from "./Peticiones/Foro";
import { useFirebaseApp, FirestoreProvider } from "reactfire";
import { getFirestore } from "@firebase/firestore";

export const Peticiones = () => {
    const fireStoreIntance = getFirestore(useFirebaseApp())
    return (
        <div>
            <Slider title='Peticiones de Animes, Peliculas y Ovas' ></Slider>
            <section id='content'>
                <h2 className="littleTitle">Aqui podras escribir que animes quieres que incluyamos a nuestra plataforma</h2>
                <FirestoreProvider sdk={fireStoreIntance}>
                    <FormMessage></FormMessage>
                    <Foro></Foro>

                </FirestoreProvider>
                
            </section>
        </div>
    )
}