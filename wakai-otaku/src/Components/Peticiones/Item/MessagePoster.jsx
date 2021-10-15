import React from "react";
import Avatar from "../../../Assets/images/Avatar.png"
import IconReport from "../../../Assets/images/report.svg";
import Axios from 'axios';
import Swal from 'sweetalert2';


export const MessagePoster = ({ name, body, img, deleteDoc, id }) => {


    const reporteImg = async () => {
        console.log(img)
        let result = await Axios.get('https://api.sightengine.com/1.0/check.json', {
            params: {
                'url': img,
                'models': 'nudity, wad',
                'api_user': '1712392014',
                'api_secret': '5CdXyvC3xbAXG47oSbev',
            }
        })
        console.log(result)
        if(result.status === 200){
            const { partial, raw } = result.data.nudity
            const { weapon, drugs } = result.data

            if(raw > 0.2 || partial > 0.3 ){
                console.log('Contenido Inapropiado, gracias reporte')
                deleteDoc(id)
                Toast.fire({
                    title: 'Contenido inapropiado, gracias por su reporte',
                    icon: 'success'
                })
            }else if(weapon > 0.5 || drugs > 0.1){
                deleteDoc(id)
                Toast.fire({
                    title: 'Contenido sobre Armas de fuego y Drogas detectado, gracias por su reporte',
                    icon: 'success'
                })
            }else{
                console.log('Contenido Bueno, shido')
                Toast.fire({
                    title: 'Evaluaremos su reporte, gracias por su ayuda',
                    icon: 'info'
                })
            }
        }
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })



    return (
        <div className="containerMessage">
            <img src={Avatar} alt="" className="avatarMessages avatarPoster" />
            <div className="messagePoster">
                <p className="name">{name} <span>Hace 1 Hora</span></p>
                <p className="body">{body} </p>
                <img src={img} alt="Poster" className="posterChat" />
            </div>

            <div className="report poster">
                <img src={IconReport} alt="Reportar" onClick={reporteImg} />
            </div>
        </div>
    )
}
