import React from "react";
import Avatar from "../../Assets/images/Avatar.png"

export const Foro = () => {

    return (
        <div className="containerForo">
            <div className="containerMessage">
                <img src={Avatar} alt="" className="avatarMessages" />
                <div className="message">
                    <p className="name">Douglas Hernandez <span>Hace 1 Hora</span></p>
                    <p className="body">Prueba de mensaje </p>
                </div>
            </div>

            <div className="containerMessage">
                <img src={Avatar} alt="" className="avatarMessages" />
                <div className="message">
                    <p className="name">Douglas Hernandez <span>Hace 1 Hora</span></p>
                    <p className="body">Mensaje 2 </p>
                </div>
            </div>
        </div>
    )
}