import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SignIn from '../pages/SignIn/index'
import CreateUser from '../pages/user/CreateUser'
import Dashboard from '../pages/Dashboard/Dashboard'
import Album from '../pages/Dashboard/Album'
import Images from '../pages/imagen/Images'
import { AuthProvider } from '../contexts/auth';
import Private from './Private';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <Route path="/singnin" exact component={SignIn}/>
                    <Private path="/dashboard" component={Dashboard} />
                    <Route path="/user/create" component={CreateUser}/>
                    <Private path="/user/albums/selected/:id" component={Album}/>
                    <Private path="/user/album/images" component={Images}/>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
} 