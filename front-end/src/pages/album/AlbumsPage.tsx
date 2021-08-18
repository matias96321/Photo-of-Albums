import { useEffect, useState } from 'react';
import api from '../../services/api';

interface User{
    id:number;
    email:string;
    name:string;
}

export default  function AlbumsPage() {

    const [ userData, setUserData ] = useState(Object);

    function getUser(){
        
        const user = localStorage.getItem('@album/usuario')
        
        if(user) setUserData(JSON.parse(user))
        

        async function getAbums(){
            const data = await api.get(`/api/user/${userData.id}/albums`)
            console.log(data);
        }
        getAbums();
    }

    console.log(userData);
    


        useEffect(()=>{getUser()},[]);

    return (
        <div>
            <h1>Page album</h1>
        </div>
    )
}
