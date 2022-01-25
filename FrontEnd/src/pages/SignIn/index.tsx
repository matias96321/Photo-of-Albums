import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './index.css';

export default function Singin() {

  const [ email, setEmail ] = useState(String);
  const [ password, setPassword ] = useState(String);

  const { SignIn } = useContext(AuthContext);

  function HandleSingin(){
    SignIn({email, password});
  }
  
  return (
    <div id="page-login">
      <div className="box">
        <h2>Meus álbuns de fotos</h2>
        <div className="form">
          <div className="inputBx">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Seu email" onChange={ e => setEmail(e.target.value) }/>
          </div>
          <div className="inputBx">
            <label htmlFor="password"><span>Senha</span></label>
            <input type="Password" id="password" placeholder="Sua senha" onChange={ e => setPassword(e.target.value) }/>
          </div>
          <div className="inputBtn">
            <label className="container">
              <input type="checkbox"></input>
              <span className="checkmark">Lembrar-me</span>
            </label>
            <div>
              <Link to="/singnin">
                <p>Esqueci a senha</p>
              </Link>
            </div>
          </div>
          <div className="btn-login" >
            <div onClick={()=>{HandleSingin()}}>
              <button className="btn-login-content" >Entrar</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

