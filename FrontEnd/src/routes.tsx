import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/login/login'
import CreateUser from './pages/user/CreateUser'
import AlbumsGalery from './pages/Albums/AlbumsGalery'
import Album from './pages/Albums/Album'
import Images from './pages/imagen/Images'
import Menu from './components/menu';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/user/create" component={CreateUser}/>
                <Route path="/user/albums/selected/:id" component={Album}/>
                <Route path="/user/albums" component={AlbumsGalery}/>
                <Route path="/user/album/images" component={Images}/>
            </Switch>
        </BrowserRouter>
    );
} 