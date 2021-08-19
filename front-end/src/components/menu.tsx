import React from 'react'
import { Link } from 'react-router-dom'
import '../components/menu.css'
export interface UserProps {
    name: string;
}

export default function Menu({name}: UserProps) {
    return (
        <div>
            <div className="nav">
                <div className="login"><h3>Meus albums de fotos</h3></div>
                <div className="logout"><h3>Olá, {name}</h3> <Link to="/">sair</Link></div>
            </div>
        </div>
    )
}
