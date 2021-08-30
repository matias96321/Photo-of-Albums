import AlbumCard from '../../components/cards/album'
import { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { CgAdd } from "react-icons/cg";
import './Albums.css'
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
    const [ albums, setAlbums ] = useState<Album[]>([]);
    const [newUser, setNewUser] = useState(false)

    useEffect(()=>{
        (async () => {
            const user = localStorage.getItem('@album/usuario')
            
            if(user) 
            setUserData(JSON.parse(user));

            const albums = await api.get(`/api/users/${userData.id}/albums`);

            if(albums.data.responseData.length === 0) 
            setNewUser(true);

            setAlbums(albums.data.responseData);

        })()    
    },[userData.id]);
    
    return (
        <div className="page-albums">
            <Menu name={userData.name}/>
            <div className="container">
                
               
                    {/* {
                        albums.length === 0

                        ?
                        
                        <div className="albums-cards"> 

                            {albums.map((albumn: Album) => {  return( <AlbumCard album={albumn}/>)})} 

                            <Link to=""> <div className="album-btn">Novo Album</div> </Link>
                        
                        </div>

                        : 
                        
                        <div className="fist-album">
                            <CgAdd size='100' color="#cb463a"/>
                            <Link to=""> <div className="album-btn"></div> </Link>
                        </div>
                    }  */}
                   
            </div>
        </div>
    )
}
