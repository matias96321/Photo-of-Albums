import React, { ChangeEvent, FormEvent, useState } from 'react';
import './AlbumForm.css';
import image from '../../assets/Photo album-pana.svg'
import { FiPlus } from 'react-icons/fi'

interface Album {
  title: string;
  photos: string[];
}

const AlbumForm: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

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
        <form onSubmit={handlerSubmitForm} className="create-album-form">
          <fieldset>
          <legend>Novo Album</legend>
          <img className='image-form-represent' src={image}alt="album-represent" />
          
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
                
              <label htmlFor="images[]" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label>

            </div>
            <input multiple onChange={handlerImagesSelect} type="file" name="images[]" id="images[]"/>
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
      </main>
    </div>
  );
};

export default AlbumForm;