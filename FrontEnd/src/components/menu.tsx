import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './menu.css'
import { AuthContext , AuthProvider } from '../contexts/auth';
import { GoSignOut } from "react-icons/go";
 
export default function Menu(){

    const { user, Logout } = useContext(AuthContext)
    
    return (
        <div>
            <div className="nav">
                <div className="nav-logo"><h3>Meus albums de fotos</h3></div>
                <div className="nav-options">
                    <h3>Olá, {user.name}</h3>
                    <div className="nav-signout">
                        <GoSignOut className="nav-signout-icon" size={25}/>
                        <Link to="/singnin" className="btn-signout" onClick={()=> Logout()}>signout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
