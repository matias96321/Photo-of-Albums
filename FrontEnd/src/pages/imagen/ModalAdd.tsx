import './ModalAdd.css'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams  } from 'react-router-dom'
import api from '../../services/api'
import  * as utils from '../../utils/ultil'
import Color from "color-thief-react";
import firebase from '../../firebase/firebase'

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
    size: string;
    color: string;
    url_firebase: string;
    album_id: string; 
}

export default function ModalAdd({ModalVisibleProps}: Modal) {
    const [ userData, setUserData ] = useState<User>(Object);
    const [album, setAlbum] = useState<Album>(Object)
    const [UrlImage ,setUrlImage] = useState<string>('')
    const [colorPred, setColorPred] = useState<string>('')
    const [imageFile,setImageimageFile] = useState<File>(Object);
    const [imageData,setImageData] = useState<ImageData>(Object);

    const { id } = useParams<{id: string}>();

    console.log(id);
    

    async function saveImage(){


        try {
            
            const upload =  firebase.storage().ref().child('album-app').child(imageFile.name).put(imageFile)
            
            console.log( await upload.snapshot.ref.getDownloadURL());
            
            
        } catch (error) {
            console.log(error);
            
        }

    }

    function handleImages(event: ChangeEvent<HTMLInputElement>){

        if(!event.target.files)
        return;

        const imageSelected = event.target.files[0];
        
        setImageimageFile(imageSelected);
      
        setUrlImage(URL.createObjectURL(imageSelected));

        setImageData({
            ...imageData, 
            date: utils.getDateTime(imageSelected), 
            size: utils.formatBytes(imageSelected.size, 2), 
            album_id: id
        });

    }



    useEffect(()=> {
        setImageData({...imageData, color: colorPred})
    },[colorPred])


    useEffect(() => {
        setUserData(utils.getUserStorages())
    },[])

    return (
        <div className="container-modal">
            
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
                        <input type="text" placeholder="Titulo" onChange={(e)=>{setImageData({...imageData, title: e.target.value})}} required/>
                    </div>
                    
                    <div className="input-modal-text">
                        <textarea id="description" rows={10} cols={30} placeholder="Descrição" onChange={(e)=>{setImageData({...imageData, description: e.target.value})}} required></textarea>
                    </div>

                    <div className="input-modal-text">
                        <input type="text" placeholder="Data/Hora de aquisição" readOnly onChange={(e)=>{setImageData({...imageData, date: e.target.value})}} value={imageData.date} required/>
                    </div>
                    <Color src={UrlImage} crossOrigin="anonymous" format="hex" >
                        {({ data, loading }) => {
                            if(!data) return loading;
                            setColorPred(data)
                            return null;
                        }}
                    </Color>
                    <div className="input-modal-text">
                        <input type="text" placeholder="Cor predominante" style={{color: imageData.color}} value={imageData.color} required/>
                    </div>
                </div>

                <button className="concludeBtn" onClick={saveImage}>Concluir</button>

            </div>

        </div>
    )
}
