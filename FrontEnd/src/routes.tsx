import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/login/login'
import CreateUser from './pages/user/CreateUser'
import Albums from './pages/Albums/Albums'
import Images from './pages/imagen/Images'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/user/create" component={CreateUser}/>
                <Route path="/user/albums" component={Albums}/>
                <Route path="/user/album/images" component={Images}/>
            </Switch>
        </BrowserRouter>
    );
} 