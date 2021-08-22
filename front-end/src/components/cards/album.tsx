import { Link } from 'react-router-dom';
import './album.css'
interface Album{
    album:{
        id:number;
        title: string;
        description: string;
    }
}

export default function AlbumCard({album}: Album) {
    return (
        <div className="card">
            <div className="images-preview-card"><img src="https://via.placeholder.com/190x150" alt="" /></div>
            <div className="title-card"><h2><strong>{album.title}</strong></h2></div>
            <div className="descrition-card"><p>{album.description}</p></div>
        </div>
    )
}