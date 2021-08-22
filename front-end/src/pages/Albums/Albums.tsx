import { useEffect, useState } from 'react';
import api from '../../services/api';
import Menu from '../../components/menu';
import AlbumCard from '../../components/cards/album'
import './Albums.css'
import { Link } from 'react-router-dom';

interface User{
    id:number;
    email:string;
    name:string;
}

interface Album {
    id:number;
    title: string;
    name:string;
    description: string;
}

export default  function AlbumsPage() {

    const [ userData, setUserData ] = useState<User>(Object);
    const [ albums, setAlbums ] = useState([]);

    useEffect(()=>{
        (async () => {

            const user = localStorage.getItem('@album/usuario')
    
            if(user) 
            setUserData(JSON.parse(user));
            
            const albums = await api.get(`/api/users/${userData.id}/albums`);

            setAlbums(albums.data.responseData);
            
        })()    
    },[userData.id]);


    return (
        <div className="page-albums">
            
            <Menu name={userData.name} />
            
            <div className="container">
                <div className="albums-cards">
                    {
                        albums.map((albumn: Album) => {
                            return( 
                            <AlbumCard album={albumn}/>
                            )
                        })
                    }
                <div className="album-btn">
                    <Link to="">
                        Novo Album
                    </Link>
                </div>
                
                </div>
            </div>
        </div>
    )
}
