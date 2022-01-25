import React, { useEffect } from "react";
import {ModalContext} from '../../contexts/Modal'
import api from "../../services/api";
import './modal.css'


interface Image{
    data:{
        firebase_url: string
        color: string
        date: string
        description: string
        id: number
        size: string
        title: string
        album: {
            description: string
            id: number
            title: string
        }
    }
}

const Modal = (imgeData: Image) => {

    const { hideModal } = React.useContext(ModalContext)

    async function deleteImage(){

        try{
            const result = await api.delete(`/api/users/albums/images/${imgeData.data.id}`)
            console.log(result);
            return hideModal()
        }catch(err){
            console.log(err);
            
        }
      
    }


    useEffect(() => {
    //    function getImageData(){
    //     // const images = await api.get(`/api/users/albums/${album.data.responseData.id}/images`)
    //    }
    });

    return(
      <>
        <div className="modal-container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">{imgeData.data.title}</h3>
                        <p className="close" onClick={()=>{hideModal()}}>Fechar</p>
                    </div>
                    <div className="modal-body">
                        <img src={imgeData.data.firebase_url} alt={'title'} />
                    </div>
                    <div className="modal-footer">
                        <p className="description-footer">{imgeData.data.description}</p>
                    </div>
                </div>
            </div>
            <div className="btn-delete">
                <p className="btn-delete" onClick={()=>{deleteImage()}}>Excluir foto</p>
            </div>
        </div>
      </>
    )  
}

export default Modal;
