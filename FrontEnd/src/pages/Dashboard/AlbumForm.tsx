import React, { ChangeEvent, FormEvent, useState } from 'react';
import './AlbumForm.css';
import image from '../../assets/Photo album-pana.svg'
import { FiPlus } from 'react-icons/fi'
import  ImageForm  from './ImageForm'

interface Album {
  title: string;
  photos: string[];
}

const AlbumForm: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [modalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
      setModalOpen(false);
  };


  const handlerSubmitForm = (event: FormEvent) => { 
    event.preventDefault();
    console.log("asdasdasdasd");
    
  }
  const handlerImagesSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const SelectedImages =  Array.from(event.target.files)
  }
  return (
    <div className='page-create-album'>
      <main>
        <div className='container-album'>
        <form onSubmit={handlerSubmitForm} className="create-album-form">
          <fieldset>
          <legend>Novo Album</legend>
          
          <div className="input-block">
            <label htmlFor="name">Titulo</label>
            <input id="name"/>
          </div>
          
          <div className="input-block">
            <label htmlFor="about">Descrição do Album<span>Máximo de 300 caracteres</span></label>
            <textarea id="name" maxLength={300}/>
          </div>
          <div className="input-block">
            <label htmlFor="images">Fotos</label>
            <div className="images-container">
              <label onClick={openModal} htmlFor="images[]"  className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label>
            </div>
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
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
        <img className='image-form-represent' src={image}alt="album-represent" />

        </div>
      </main>
      {modalOpen && <ImageForm />}
    </div>
  );
};

export default AlbumForm;