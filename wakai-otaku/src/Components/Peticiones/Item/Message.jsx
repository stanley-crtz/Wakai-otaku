import React from "react";
import Avatar from "../../../Assets/images/Avatar.png"
import IconReport from "../../../Assets/images/report.svg";

export const Message = ({ name, body }) => {

    return (
        <div className="containerMessage">
            <img src={Avatar} alt="" className="avatarMessages" />
            <div className="message">
                <p className="name">{name} <span>Hace 1 Hora</span></p>
                <p className="body">{body}</p>
            </div>

            <div className="report">
                <img src={IconReport} alt="Reportar" />
            </div>
        </div>
    )
}