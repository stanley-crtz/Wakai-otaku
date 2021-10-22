import {collection, doc, orderBy, query, setDoc} from "firebase/firestore"
import {useState} from "react"
import {useParams} from "react-router-dom"
import {useFirestore, useFirestoreCollectionData} from "reactfire"
import {Items} from "./Items"

export const Foro = () => {

    const { id } = useParams()
    const [msg, setMsg] = useState('')

    const collectionRef = collection(useFirestore(), 'AnimeForo', id, 'Messages');

    const { status, data } = useFirestoreCollectionData(query(collectionRef, orderBy('date')))
    console.log(data)
    const handleSendMessage = () => {
        setDoc(doc(collectionRef), {
            user: localStorage.getItem('name'),
            msg,
            date: new Date()
        })
    }

    const handleChangeMessage = (event) => {
        setMsg(event.target.value)
    }

    return (
        <div className="anime-foro">
            <h1>Comentarios</h1>
            <div className="comments">
                {
                    status === "success" && data.map((el, index) => <Items user={el.user} msg={el.msg} img={el.img} key={`item-foro-${index}`} />) 
                }
            </div>

            <div className="input-container">
                <input type="text" placeholder="Ingrese un comentario" value={msg} onChange={handleChangeMessage} />

                <img src="https://www.nicepng.com/png/full/822-8229046_rsum-send-icon-png.png" alt="icon-send" onClick={handleSendMessage} />
            </div>
        </div>
    )
}
