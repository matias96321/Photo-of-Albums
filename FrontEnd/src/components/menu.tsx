import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './menu.css'
import * as utils from '../utils/ultil'
interface User{
    id:number;
    email:string;
    name:string;
}
export default function Menu(){

    function logout(){
        localStorage.clear();
    }

    const [ userData, setUserData ] = useState<User>(Object);

    useEffect(()=> {
        setUserData(utils.getUserStorages)
    },[])

    console.log(userData);

    return (
        <div>
            <div className="nav">
                <div className="login"><h3>Meus albums de fotos</h3></div>
                <div className="logout"><h3>Olá, {userData.name}</h3> <Link to="/" onClick={logout}>sair</Link></div>
            </div>
        </div>
    )
}
