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
            <div className="card-image"></div>
            <div className="card-text">
                <h2>fist album</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
                <div className="card-btns"></div>
        </div>
    )
}