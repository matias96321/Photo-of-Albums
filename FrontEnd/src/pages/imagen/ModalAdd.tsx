import './ModalAdd.css'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory  } from 'react-router-dom'
import api from '../../services/api'
import  * as utils from '../../utils/ultil'
import Color, { Palette } from "color-thief-react";

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

interface ImageData{
    title: string;
    description: string;
    date: string;
    size: number;
    color: string;
}

export default function ModalAdd({ModalVisibleProps}: Modal) {
    const [ userData, setUserData ] = useState<User>(Object);
    const [album, setAlbum] = useState<Album>(Object)
    const [UrlImage ,setUrlImage] = useState<string>('')
    const [colorPred, setColorPred] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [imageFile,setImageimageFile] = useState<File>(Object);
    const [imageData,setImageData] = useState<ImageData>(Object);

    function handleImages(event: ChangeEvent<HTMLInputElement>){

        if(!event.target.files)
        return;

        const imageSelected = event.target.files[0]
        
        setImageData({...imageData, date: utils.getDateTime(imageSelected)})

        setImageimageFile(imageSelected);
      
        setUrlImage(URL.createObjectURL(imageSelected))

    }

    console.log(imageData);
    

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

    return (
        <div className="container-modal">
            <Color src={UrlImage} crossOrigin="anonymous" format="hex">
                {({ data, loading }) => {
                
                if(!data) return;
                
                setImageData({...imageData, color: data});
                
                return null;
                }}
            </Color>
            <div className="modal">

                <button className="closeBtn" onClick={()=>{ModalVisibleProps(false)}}>Fechar</button>
                
                <div className="modal-content">

                    <div className="modal-content-header">
                        <h3>Adicionar nova foto</h3>
                    </div>
                    
                    <div className="input-Modal-file">
                        <p>{imageFile.name}</p>
                        <label htmlFor='selecao-arquivo' >Selecionar um arquivo </label>
                        <input type="file" id="selecao-arquivo" onChange={handleImages}/>
                    </div>
                    
                    <div className="input-modal-text">
                        <input type="text" placeholder="Titulo"/>
                    </div>
                    
                    <div className="input-modal-text">
                        <textarea id="description" rows={10} cols={30} placeholder="Descrição" onChange={(e)=>{setImageData({...imageData, description: e.target.value})}} required></textarea>
                    </div>

                    <div className="input-modal-text">
                        <input type="text" placeholder="Data/Hora de aquisição" value={imageData.date} required/>
                    </div>
                
                    <div className="input-modal-text">
                        <input type="text" placeholder="Cor predominante" style={{color: imageData.color}} value={imageData.color} required/>
                    </div>
                </div>

                <button onClick={addAlbum} className="concludeBtn">Concluir</button>

            </div>

        </div>
    )
}
