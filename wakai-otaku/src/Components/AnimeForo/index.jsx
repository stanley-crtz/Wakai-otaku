import {useEffect, useState} from "react";
import Axios from 'axios';
import {useParams} from "react-router-dom";
import {Information} from "./Information";
import {Foro} from "./Foro";
import {FirestoreProvider, useFirebaseApp} from "reactfire";
import {getFirestore} from "firebase/firestore";

const AnimeForo = () => {

    const params = useParams()
    const [anime, setAnime] = useState(null)
    const firestoreInstance = getFirestore(useFirebaseApp());

    useEffect(() => {
        Axios.get(`https://kitsu.io/api/edge/anime/${params.id}`)
            .then(resp => resp.data.data.attributes)
            .then(resp => setAnime(resp))
            .catch(err => console.error(err))
    }, [params.id])

    return (
        <div className="foro-container">
            {
                anime && (
                    <>
                        <Information {...anime} />
                         <FirestoreProvider sdk={firestoreInstance}>
                            <Foro />
                         </FirestoreProvider>
                    </>
                )
            }
        </div>

    )
}

export default AnimeForo;
