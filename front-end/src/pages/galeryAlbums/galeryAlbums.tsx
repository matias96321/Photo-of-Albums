import { useEffect, useState } from 'react';
import api from '../../services/api';
import Menu from '../../components/menu'
import CardAlbums from '../../components/cards/album'
import './galeryAlbums.css'

interface User{
    id:number;
    email:string;
    name:string;
}

export default  function AlbumsPage() {

    const [ userData, setUserData ] = useState<User>(Object);
    const [ albums, setAlbums ] = useState<Object>([]);

    const data = userData
    useEffect(()=>{
        (async () => {

            const user = localStorage.getItem('@album/usuario')
    
            if(user) setUserData(JSON.parse(user))

            const albums = await api.get(`/api/user/${userData.id}/albums`);
            setAlbums(albums);
            console.log("sadasdas");
            
        })()    
    },[]);


    return (
        <div className="page-albums">
            <Menu name={userData.name} />
            {data}
            <div className="container">
                <CardAlbums />
            </div>
        </div>
    )
}
