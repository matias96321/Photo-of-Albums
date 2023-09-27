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
                <h3>{album.title}</h3>
                <p>{album.description}</p>
            </div>
                <div className="card-btns"></div>
        </div>
    )
}