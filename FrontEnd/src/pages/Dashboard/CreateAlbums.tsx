import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth';
import api from '../../services/api'
import  * as utils from '../../utils/ultil'
import './CreateAlbums.css'

interface Modal{
    ModalVisibleProps: any;
}

interface Album{
    title: string;
    description: string;
    user_id: number
}

export default function CreateAlbums({ModalVisibleProps}: Modal) {

    const [album, setAlbum] = useState<Album>(Object)

    const { user } = useContext(AuthContext)
 
    console.log(user);
    
    async function addAlbum(){
        try {

            await api.post('/api/users/albums',{...album, user_id: user.id})
            ModalVisibleProps(false)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container-modal">

            <div className="modal">

                <button className="closeBtn" onClick={()=>{ModalVisibleProps(false)}}>Fechar</button>
                
                <div className="modal-content">
                    <div className="modal-content-header">
                        <h3>Criar novo album</h3>
                    </div>
                    <div className="input-Modal-content">
                        <input type="text"  id="title" placeholder="Titulo" onChange={(e)=>{setAlbum({...album, title: e.target.value})}} required/>
                    </div>
                    <div className="input-Modal-content">
                        <textarea id="description" rows={10} cols={30} placeholder="Descrição" onChange={(e)=>{setAlbum({...album, description: e.target.value})}} required></textarea>
                    </div>
                </div>

                <button onClick={addAlbum} className="concludeBtn">Concluir</button>

            </div>
        </div>
    )
}
