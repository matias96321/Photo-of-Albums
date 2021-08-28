import { Link } from 'react-router-dom'
import './menu.css'
export interface UserProps {
    name: string;
}

export default function Menu({name}: UserProps) {
    function logout(){
        localStorage.clear();
    }
    return (
        <div>
            <div className="nav">
                <div className="login"><h3>Meus albums de fotos</h3></div>
                <div className="logout"><h3>Olá, {name}</h3> <Link to="/" onClick={logout}>sair</Link></div>
            </div>
        </div>
    )
}
