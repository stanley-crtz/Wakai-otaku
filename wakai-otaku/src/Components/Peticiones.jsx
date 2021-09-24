import React from "react";
import { Slider } from "./Slider/Slider";
import { FormMessage } from "./Peticiones/FormMessage";
import { Foro } from "./Peticiones/Foro";
import { useFirebaseApp, FirestoreProvider, StorageProvider } from "reactfire";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

export const Peticiones = () => {
    const fireStoreIntance = getFirestore(useFirebaseApp())
    const storageIntace = getStorage(useFirebaseApp())
    return (
        <div>
            <Slider title='Peticiones de Animes, Peliculas y Ovas' ></Slider>
            <section id='content'>
                <h2 className="littleTitle">Aqui podras escribir que animes quieres que incluyamos a nuestra plataforma</h2>
                <FirestoreProvider sdk={fireStoreIntance}>
                    <StorageProvider sdk={storageIntace}>
                        <FormMessage></FormMessage>

                        <Foro></Foro>
                    </StorageProvider>

                </FirestoreProvider>
                
            </section>
        </div>
    )
}