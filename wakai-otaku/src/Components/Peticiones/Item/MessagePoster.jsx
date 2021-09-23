import React from "react";
import Avatar from "../../../Assets/images/Avatar.png"
import PosterSao from '../../../Assets/images/Poster-Alicization.jpg'
import IconReport from "../../../Assets/images/report.svg";

export const MessagePoster = ({ name, body, poster }) => {

    return (
        <div className="containerMessage">
            <img src={Avatar} alt="" className="avatarMessages avatarPoster" />
            <div className="messagePoster">
                <p className="name">{name} <span>Hace 1 Hora</span></p>
                <p className="body">{body} </p>
                <img src={PosterSao} alt="Poster" className="posterChat" />
            </div>

            <div className="report poster">
                <img src={IconReport} alt="Reportar" />
            </div>
        </div>
    )
}