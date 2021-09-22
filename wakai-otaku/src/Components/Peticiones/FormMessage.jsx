import React from "react";
import Avatar from "../../Assets/images/Avatar.png"
import uploadImg from "../../Assets/images/Upload.svg"
import SendImg from "../../Assets/images/enviar.svg"


export const FormMessage = () => {

    return (
        <>
            <div className='alignHorizontal'>
                <img src={Avatar} alt="Avatar" className="avatarChat" />
                <div className="inputForo">
                    <input type="text" placeholder="Ingresa un nombre de usuario" className="inputHalf" />
                    <input type="text" placeholder="Agrega tu peticion" />
                </div>
                <img src={SendImg} alt="Avatar" className="avatarChat sendMessage" />
            </div>
            <div className="buttonsForo" >
                <button className="avatarChat">
                    <img src={uploadImg} alt="Avatar" />
                </button>
            </div>
        </>
    )
}