import React, { useState } from "react";
import Avatar from "../../Assets/images/Avatar.png"
import uploadIcon from "../../Assets/images/Upload.svg"
import SendImg from "../../Assets/images/enviar.svg"
import deleteImg from "../../Assets/images/boton-x.svg"
import { collection, doc, setDoc } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from '@firebase/storage'
import { useFirestore, useStorage } from "reactfire";
import Swal from 'sweetalert2';


export const FormMessage = () => {

    
    const [message, setMessage] = useState({ name: '', message: '', file: '' })
    let referenceBD = useFirestore()
    const refCollectionForo = collection(referenceBD, "Foro")
    let referenceStorage = ref(useStorage(), `Foro/${message.file.name}`)
    const sendMessage = async () => {
        let urlImg = ''
        if(message.file != ''){
            Toast.fire({
                icon: "info",
                title: "Espere un momento"
            })
            urlImg = await uploadImg()
        }

        await setDoc(doc(refCollectionForo), {
            name: message.name,
            message: message.message,
            img: urlImg,
            type: message.file == '' ? "1" : "2"
        });
        Toast.fire({
            icon: "success",
            title: "Mensaje enviado con exito"
        })
        setMessage({name: '', message: '', file: ''})
        console.log('Mensaje Guardado')
    }

    const onchange = ({ currentTarget: { value, name } }) => {
        setMessage({ ...message, [name]: value })
    }

    const selectImage = async () => {
        const { value: file } = await Swal.fire({
            title: 'Selecciona el poster del Anime',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your profile picture'
            }
        })

        if (file) {
            console.log(file)
            const reader = new FileReader()
            reader.onload = (e) => {
                Swal.fire({
                    title: 'Vista previa de la foto',
                    imageUrl: e.target.result,
                    imageAlt: 'The uploaded picture',
                    imageHeight: 300,
                    imageWidth: 300,
                    confirmButtonText: 'Confirmar',
                    text: 'Desea subir esta imagen?'

                }).then((result) => {
                    if (result.isConfirmed) {
                        setMessage({ ...message, file: file })
                    }
                })
            }
            reader.readAsDataURL(file)
        }
    }

    const uploadImg = async() => {
        await uploadBytes(referenceStorage, message.file)
        let url = await getDownloadURL(referenceStorage)
        
        return url
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return (
        <>
            <div className='alignHorizontal'>
                <img src={Avatar} alt="Avatar" className="avatarChat" />
                <div className="inputForo">
                    <input type="text" 
                        placeholder="Ingresa un nombre de usuario" 
                        className="inputHalf" 
                        name="name" 
                        value={message.name}
                        onChange={onchange} />
                    <input type="text" 
                        placeholder="Agrega tu peticion" 
                        name="message"
                        value={message.message}
                        onChange={onchange} />
                </div>
                <img src={SendImg} alt="Avatar" className="avatarChat sendMessage" onClick={sendMessage} />
            </div>
            <div className="buttonsForo" >
                <button className="avatarChat" onClick={selectImage}>
                    <img src={uploadIcon} alt="Avatar" />
                </button>
                {message.file != '' &&
                    <>
                        <p className="file" >{message.file.name}</p>
                        <button className="btnDeleteFile">
                            <img src={deleteImg} alt="Avatar" />
                        </button>
                    </>
                }
            </div>
        </>
    )
}