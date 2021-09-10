import './ModalAdd.css'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory  } from 'react-router-dom'
import api from '../../services/api'
import  * as utils from '../../utils/ultil'

interface Modal{
    ModalVisibleProps: any;
}

interface User{
    id:number;
    email:string;
    name:string;
}

interface Album{
    title: string;
    description: string;
    user_id: number
}



export default function ModalAdd({ModalVisibleProps}: Modal) {
    const [ userData, setUserData ] = useState<User>(Object);
    const [album, setAlbum] = useState<Album>(Object)


    const [image,setImage] = useState<File>(Object);


    function handleImages(event: ChangeEvent<HTMLInputElement>){

        if(!event.target.files)
        return;

        const imageSelected = event.target.files[0]
        
        console.log(event.target.files[0]);
        
        setImage(imageSelected);
      
    }


    useEffect(() => {
        setUserData(utils.getUserStorages())
    },[])

    async function addAlbum(){
        try {

            await api.post('/api/users/albums',{...album, user_id: userData.id})
            ModalVisibleProps(false)

        } catch (error) {
            console.log(error);
        }
    }

    console.log(userData);
    
    return (
        <div className="container-modal">

            <div className="modal">

                <button className="closeBtn" onClick={()=>{ModalVisibleProps(false)}}>Fechar</button>
                
                <div className="modal-content">

                    <div className="modal-content-header">
                        <h3>Adicionar nova foto</h3>
                    </div>
                    
                    <div className="input-Modal-file">
                        <p>{image.name}</p>
                        <label htmlFor='selecao-arquivo' >Selecionar um arquivo </label>
                        <input type="file" id="selecao-arquivo" onChange={handleImages}/>
                    </div>
                    
                    <div className="input-modal-text">
                        <input type="text" name="" id="" />
                    </div>

                    <div className="input-modal-text">
                        <input type="text" name="" id="" />
                    </div>

                    <div className="input-modal-text">
                        <input type="text" name="" id="" />
                    </div>



                </div>

                <button onClick={addAlbum} className="concludeBtn">Concluir</button>

            </div>

        </div>
    )
}
