import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import '../login/login.css';

export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function Auth(){
    try{
      const {data} = await api.post('/api/login', { email:email, password:password })

      localStorage.setItem('@album/usuario', JSON.stringify(data.responseData))

      return window.location.href = "/user/albums";

    }catch(error){console.log(error);}
  }

  return (
    <div id="page-login">
      <div className="content-wrapper">
        <div className="box">
        <h2>Meus álbuns de fotos</h2>
        <p>Autentique-se</p>
          <div className="form">
            
            <div className="inputBx">
              <input type="email" placeholder="Email" onChange={ e => setEmail(e.target.value) }/>
            </div>
            <div className="inputBx">
              <input type="Password" placeholder="Password" onChange={ e => setPassword(e.target.value) }/>
            </div>
            <div className="inputBtn">
              <Link to="/user/create">
                <p>Cadastra-se</p>
              </Link>
              <button onClick={()=> Auth()} >Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

