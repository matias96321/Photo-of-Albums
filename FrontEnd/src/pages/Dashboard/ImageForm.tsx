import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ImageForm.css';
import imageUpload from '../../assets/Image upload-pana.svg'
import { RiImageAddFill } from "react-icons/ri";
import { BsUpload } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";


const ImageForm: React.FC = () => {

  const [image,setImage] = useState<File>()
  const [SelectImagePreview,setSelectImagePreview] = useState<string>()

  const handlerSubmitForm = (event: FormEvent) => {

  }
  const handlerImagesSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {return}

    const SelectedImage =  event.target.files[0]

    setImage(SelectedImage)
    
    let image = URL.createObjectURL(SelectedImage)

    setSelectImagePreview(image)

    console.log(SelectedImage);
  }
  const deleteImage = (event: FormEvent) => {
    event.preventDefault();
    setImage(undefined);
    setSelectImagePreview(undefined)
  }
  return (
    <div className='page-create-image'>
        <main>
            <div className='form-container'>
                
                <form onSubmit={handlerSubmitForm} className="create-image-form">
                    
                    <fieldset>
                    <div className='image-form-represent'>
                        <img src={imageUpload} alt="" />
                    </div>
                    <legend>Adicionar Imagem</legend>
                    
                    <div className="input-block">
                        <label htmlFor="name">Titulo</label>
                        <input id="name"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="about">Descrição da imagem<span>Máximo de 300 caracteres</span></label>
                        <textarea id="name" maxLength={300}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="images">Foto</label>
                        <div className="images-container">
                            <label htmlFor="images[]" className="new-image">
                                {SelectImagePreview? <img src={SelectImagePreview} alt="" /> :<RiImageAddFill size={250} color="#8FA7B3" />}
                            </label>
                            <div className='buttons-image'>
                                <button onClick={deleteImage} className="button-upload-image">
                                    <FiTrash2 size={24} color="#8FA7B3" />
                                </button>
                                <button className="button-upload-image">
                                    <BsUpload  size={24} color="#8FA7B3"/>
                                </button>
                            </div>
                        </div>
                        <input type="file" onChange={handlerImagesSelect} name="images[]" id="images[]"/>
                    </div>
                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                    </fieldset>
                </form>
            </div>
        </main>
    </div>
  );
};

export default ImageForm;