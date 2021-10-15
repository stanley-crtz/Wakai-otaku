import React, { useEffect, useState } from "react";
import { Message } from "./Item/Message";
import { MessagePoster } from "./Item/MessagePoster";
import { collection, doc, deleteDoc } from "@firebase/firestore";
import { useFirestoreCollection, useFirestore } from "reactfire";


export const Foro = () => {
    const [idDoc, setIdDoc] = useState('a')
    const refCollectionForo = collection(useFirestore(), 'Foro');
    const { status, data } = useFirestoreCollection(refCollectionForo)

    const refDocMessage = doc(useFirestore(), `Foro/${idDoc}`);

    const deleteMessage = (idMessage) => {
        setIdDoc(idMessage)
    }

    useEffect(() => {
        deleteDoc(refDocMessage)
    }, [idDoc, refDocMessage])

   
    return (
        <div className="containerForo">

            {status === 'success' &&
                data.docs.map((item, i) => {
                    let data = item.data()
                    if (data.type === '1') {
                        return (<Message name={data.name} body={data.message} id={item.id} key={item.id} ></Message>)
                    } else {
                        return (<MessagePoster
                            name={data.name}
                            body={data.message}
                            img={data.img}
                            id={item.id}
                            key={item.id}
                            deleteDoc={deleteMessage}
                        ></MessagePoster>)
                    }
                })
            }
        </div>
    )
}
