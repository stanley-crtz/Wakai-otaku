import React from "react";
import Avatar from "../../Assets/images/Avatar.png"
import PosterSao from '../../Assets/images/Poster-Alicization.jpg'
import { Message } from "./Item/Message";
import { MessagePoster } from "./Item/MessagePoster";
 
export const Foro = () => {

    return (
        <div className="containerForo">
            
            <Message name="Douglas Hernandez" body="Mensaje de prueba" ></Message>
            <MessagePoster name="Douglas Hernandez" body="Mensaje con poster"></MessagePoster>
            <MessagePoster name="Douglas Hernandez" body="Mensaje con poster"></MessagePoster>
            <Message name="Douglas Hernandez" body="Mensaje de prueba" ></Message>
        </div>
    )
}