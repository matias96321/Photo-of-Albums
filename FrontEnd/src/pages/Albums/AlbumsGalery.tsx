import AlbumCard from '../../components/cards/album'
import { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { IoAddOutline } from "react-icons/io5";
import './AlbumsGalery.css'
import CreateAlbums from './CreateAlbums'


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
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [newUser, setNewUser] = useState(false)

    useEffect(()=>{
        (async () => {

            const user = localStorage.getItem('@album/usuario')
            console.log(user);
            
            if(user) 
            setUserData(JSON.parse(user));

            const albums = await api.get(`/api/users/${userData.id}/albums`);

            if(albums.data.responseData.length === 0) 
            setNewUser(true);

            setAlbums(albums.data.responseData);

        })()    
    },[isModalVisible, userData.id]);
    
    return (
        <div className="page-albums">
            
            <div className="menu"><Menu /></div>
            
            <h1>Meus Álbuns</h1>

            <div className="cards"> 
            
                <div className="album-btn" onClick={()=>{setIsModalVisible(true)}}>
                    <IoAddOutline size="100"/> 
                </div>    

                {albums.map((albumn: Album) => {  return(<Link to={`/user/albums/selected/${albumn.id}`} key={albumn.id}><AlbumCard album={albumn}/></Link>)})} 
                
            </div>

            {isModalVisible === true ? <CreateAlbums ModalVisibleProps={setIsModalVisible}/> :null}
            
        </div>
    )
}