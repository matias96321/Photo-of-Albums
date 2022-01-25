import React, { useContext } from "react";
import { Redirect, Route, RouteProps} from "react-router-dom";
import { AuthContext } from "../contexts/auth";

const Private: React.FC<RouteProps> = ({...rest}) => {
    
    const {userLoggedIn} = useContext(AuthContext) 

    const localStorageUser =  JSON.parse(localStorage.getItem('@ALBAUTH:user') as any)
   
    return userLoggedIn() || localStorageUser ? <Route { ...rest} /> : <Redirect to="/singnin" />
}
export default Private