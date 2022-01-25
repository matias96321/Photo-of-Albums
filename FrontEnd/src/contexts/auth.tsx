import {createContext, useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthContextData {
    singend: boolean;
    user: UserContextData;
    SignIn({email, password}:UserContextData ): Promise<void>;
    Logout(): void;
    userLoggedIn(): boolean;
}

interface UserContextData {
    id?: number;
    name?: string
    email: string;
    password: string;
}

interface UserStateData {
    id: number;
    name: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {

    const [ user, setUser ] = useState({} as UserContextData );
    let history = useHistory();
    
    useEffect(() =>{
        async function loadStorageDate(){
            const storageUser = await localStorage.getItem('@ALBAUTH:user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }
        loadStorageDate();
    }, [])

    const SignIn = async ({email, password}: UserContextData) => {
        try{
            const {data} = await api.post('/api/login', { email, password })
            setUser(data.responseData)
            localStorage.setItem('@ALBAUTH:user', JSON.stringify(data.responseData))
            history.push('/dashboard')

        }catch(error){
            return alert('Credenciais inválidas!')
        }
    }

    const Logout = () => {
        localStorage.clear()
    }

    function userLoggedIn(){
        return !!Object.keys(user).length
    }

    return (
        <AuthContext.Provider value={{ singend: !!Object.keys(user).length , user, SignIn, Logout, userLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext  , AuthProvider}