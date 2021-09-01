import React from 'react'
import './CreateAlbums.css'

export default function CreateAlbums() {
    return (
        <div className="container-modal">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-content-header">
                        <h3>Criar novo album</h3>
                    </div>
                    <div className="input-Modal-content">
                        <input type="text"  id="title" placeholder="Titulo"/>
                    </div>
                    <div className="input-Modal-content">
                        <textarea id="description" rows={10} cols={30} placeholder="Descrição"></textarea>
                    </div>
                </div>
                <div className="inputModal">
                    <button>Concluir</button>
                </div>
            </div>
        </div>
    )
}
