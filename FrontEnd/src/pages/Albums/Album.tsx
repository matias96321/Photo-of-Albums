import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import Menu from '../../components/menu'
import './Album.css'

interface Album{
    id: number;
    title: string;
    description: string;
}

export default function Album() {

    const [album, setAlbum] = useState<Album>(Object)
    const { id } = useParams<{id: string}>();
    
    
    useEffect(()=> {

        (async () => {
            try {

                const result = await api.get(`/api/users/albums/${id}`)
                setAlbum(result.data.responseData)

            } catch (error) {
                console.log(error);
            }
        })()   
    },[])
    console.log(album.title);
    
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

                    <div className="fotos-detals">fotos</div>
                    <div className="album-btns">
                        <button className="btn-delete">
                            Excluir
                        </button>
                        <button className="btn-create">
                            Adicionar fotos
                        </button>
                        <button className="btn-back">
                            voltar
                        </button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
