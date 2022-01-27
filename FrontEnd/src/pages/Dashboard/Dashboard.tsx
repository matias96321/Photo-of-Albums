import AlbumCard from '../../components/cards/album'
import { useContext, useEffect, useState } from 'react';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { IoAddOutline } from "react-icons/io5";
import './Dashboard.css'
import CreateAlbums from './CreateAlbums'
import { AuthContext } from '../../contexts/auth';

interface User{
    id?: number;
    name?: string
}

interface Album {
    id:number;
    title: string;
    name:string;
    description: string;
}

export default  function Dashboard() {

    const [ albums, setAlbums ] = useState<Album[]>([]);
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const { user } = useContext(AuthContext)

    const createAlbum = () => {
        console.log("entrou");
        
        return <CreateAlbums />
    }

    useEffect(()=>{
        (async () => {
            const albums = await api.get(`/api/users/${user.id}/albums`);
            setAlbums(albums.data.responseData);
        })()    
    },[user, isModalVisible]);
    
    return (
        <div className="container">
            <Menu />
            <div className="heading">
                <h3><span>Meus Albums</span></h3>
            </div>
            <div className="album-galery">
                {albums.map(item => {
                    return <div  key={item.id}><AlbumCard album={item}  /></div>
                })}
            </div>
            <div>
                <CreateAlbums />
            </div>
        </div>
    )
}
