import React from "react";
import { Message } from "./Item/Message";
import { MessagePoster } from "./Item/MessagePoster";
import { collection, CollectionReference, getFirestore } from "@firebase/firestore";
import { useFirebaseApp, FirestoreProvider, useFirestoreCollection, useFirestore } from "reactfire";
 
export const Foro = () => {
    
    const refCollectionForo = collection(useFirestore(), 'Foro');
    const { status, data } = useFirestoreCollection(refCollectionForo)

    return (
        <div className="containerForo">
            
            {status === 'success' &&
                data.docs.map((item, i)=> {
                    let data = item.data()
                    if(data.type == '1'){
                        return (<Message name={data.name} body={data.message} key={i} ></Message>)
                    }else{
                        return (<MessagePoster name={data.name} body={data.message} img={data.img} key={i}></MessagePoster>)
                    }
                })
            }
        </div>
    )
}