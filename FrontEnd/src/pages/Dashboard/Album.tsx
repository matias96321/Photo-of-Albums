import React, { useEffect, useState } from 'react'
import { Switch, useParams } from 'react-router-dom'
import ModalAdd from '../imagen/ModalAdd';
import api from '../../services/api';
import Menu from '../../components/menu'
import './Album.css'
import ModalImage from '../../components/modal/modal';
import {ModalContext} from '../../contexts/Modal'

interface Album{
    id: number;
    title: string;
    description: string;
}


interface Image{
    firebase_url: string
    color: string
    date: string
    description: string
    id: number
    size: string
    title: string
    album: Album
}

export default function Album() {

    const {createModal , hideModal, showStatusModal} = React.useContext(ModalContext)

    const [album, setAlbum] = useState<Album>(Object)
    const [modal, setModal] = useState()
    const [images, setImages] = useState<Array<String>>([])
    const [imageSelected, setImageSelected] = useState<Image>(Object);
    const { id } = useParams<{id: string}>();
    

    function openModal(typeModal: string){
        createModal(typeModal)
    }

    function handlerImageSelected(imageSelected: Image) {
        setImageSelected(imageSelected);
    }
    
    console.log(imageSelected);
    
    useEffect(()=> {

        (async () => {
            try {
                const album = await api.get(`/api/users/albums/${id}`)
                setAlbum(album.data.responseData)
                
                const images = await api.get(`/api/users/albums/${album.data.responseData.id}/images`)
                
                setImages(images.data.responseData)

            } catch (error) {
                console.log(error);
            }
        })()   
    },[showStatusModal().typeModal])

    if (imageSelected.firebase_url) {
        return <ModalImage data={imageSelected}/>
    }


    return (
        <div className="page-album-view">
            <Menu />
            <div className="album">
                <div className="content-album">
                    <div className="header">
                        <div className="info">
                            <h2>{album.title}</h2>
                            <h3>{album.description}</h3>
                        </div>
                        <div className="views-options">
                            <p>visualizar como: </p><a href="#"> Tabela </a>/<a href="#"> Miniatura</a> 
                        </div>
                    </div>
                    <div className="fotos-miniature">
                        <div className='fotos-group'>
                            {images.map((image: any, index)=>{
                                return(
                                    <div className='image-view'>
                                        <img src={image.firebase_url} alt={image.description} key={index} onClick={()=>{handlerImageSelected(image)}} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="album-btns">
                        <button >
                            Excluir album
                        </button>
                        <button  onClick={()=>{openModal('album')}}>
                            Adicionar fotos
                        </button>
                        <button >
                            voltar
                        </button>
                    </div>
                </div>
            </div>
            {showStatusModal().typeModal === 'album' ? <ModalAdd /> : null }
        </div>
    )
}
