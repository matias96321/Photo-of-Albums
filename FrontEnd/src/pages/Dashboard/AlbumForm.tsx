import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './AlbumForm.css';
import image from '../../assets/Photo album-pana.svg'
import { FiPlus } from 'react-icons/fi'
import ImageForm from './ImageForm';
import { AiOutlineClose } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

interface Album {
  title: string;
  photos: string[];
}

interface ImageFormData {
  title: string;
  description: string;
  image: File
}

interface AlbumFormProps {
  OncloseModal: () => void;
}


const AlbumForm: React.FC<AlbumFormProps> = ({OncloseModal}: AlbumFormProps) => {
  const [imageFormData, setImageFormData] = useState<Array<ImageFormData>>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [modalStatus, setModalStatus] = useState<boolean>(false)
  const [selectImagesPreviews, setSelectImagesPreviews] = useState<string[]>([]) 
  const [test,setTest] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7", "8"])

  useEffect(()=>{
    console.log(test);
    
  },[test])

  const openModal = () => {
    setModalStatus(true)
  };
  const closeModal = () => setModalStatus(false);

  const handlerSubmitForm = (event: FormEvent) => { 
    console.log("sadasdas");
    
    event.preventDefault();
  }

  const remderImagePreview = (image: File) => {
    return URL.createObjectURL(image)
  }
 
  const deleteImage = (event: FormEvent,index: number) => {
    event.preventDefault();
    imageFormData.splice(index, 1)
    setImageFormData([...imageFormData]);
  }
  
  const handlerImagesSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const SelectedImages =  Array.from(event.target.files)
  }

    return (
    <div className='page-create-album'>
      <main>
      <form onSubmit={handlerSubmitForm} className="create-album-form">
          <fieldset>
          <legend>
            Novo Album
            <button onClick={OncloseModal} className="close-button"><AiOutlineClose /></button>
          </legend>
          {/* <img className='image-form-represent' src={image}alt="album-represent" /> */}
          
          <div className="input-block">
            <label htmlFor="name">Titulo</label>
            <input id="name"/>
          </div>
s          <div className="input-block">
            <label htmlFor="about">Descrição do Album<span>Máximo de 300 caracteres</span></label>
            <textarea id="name" maxLength={300}/>
          </div>
          <div className="input-block">
            <label >Fotos</label>
            <div className="images-container">
              {imageFormData.map((item , index)=>{
                let imagePreview = URL.createObjectURL(item.image)
                return (
                  <div>
                    <button><RiCloseFill onClick={(e)=>{deleteImage(e,index)}} size={24} color="#FF669D" /></button>
                    <img key={index} src={imagePreview} alt=""></img>
                  </div>
                )})
              }
              <label onClick={openModal} className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label>
            </div>
            {/* <input multiple onChange={handlerImagesSelect} type="file" name="images[]" id="images[]"/> */}
          </div>
          {/* <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="images-container">
                {SelectImagesPreviews.map(image =>{
                  return (
                    <img key={image} src={image} alt=""/>
                  )})}

                 <label htmlFor="images[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
            <input multiple onChange={handlerImagesSelect} type="file" name="images[]" id="images[]"/>
          </div> */}
          </fieldset>
          <button   className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
        {modalStatus && (<ImageForm statusModal={setModalStatus} onImageFormData={imageFormData} onSetImageFormData={setImageFormData} />)}
      </main>
    </div>
  );
};






export default AlbumForm;