import AlbumCard from '../../components/cards/album'
import { useContext, useEffect, useState } from 'react';
import Menu from '../../components/menu';
import api from '../../services/api';
import './Dashboard.css'
import AddAlbum from './AlbumForm'
import { AuthContext } from '../../contexts/auth';
import albumimage from '../../assets/Collecting-pana.svg'

interface Album {
    id:number;
    title: string;
    name:string;
    description: string;
}

export default  function Dashboard() {

    const [ albums, setAlbums ] = useState<Album[]>([]);
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { user } = useContext(AuthContext)


    useEffect(()=>{
        (async () => {
            const albums = await api.get(`/api/users/${user.id}/albums`);
            setAlbums(albums.data.responseData);
        })()    
    },[user]);
    

    const openAlbum = (id: number) => {
        
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="container">
            <Menu />
            <div className="heading">
                <div className='head-container'>
                    <div className='head-text'>
                        <h1>Meus Albums</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti debitis quidem nisi obcaecati dolor perspiciatis ipsum eos earum. Doloribus nesciunt odio dolores porro quasi, harum exercitationem est sequi mollitia.</p>
                        <button onClick={openModal} >Novo</button>
                    </div>
                    <div className='header-image'>  
                        <img src={albumimage} alt="iamge" />
                    </div>
                </div>
            </div>
            <main>
                <div className='main-container'>
                    <div className='main-cards'>
                        {albums.map(item => {
                            return <div onClick={() => openAlbum(item.id)} key={item.id}><AlbumCard album={item} /></div>
                        })}
                    </div>
                </div>
                {modalOpen && <AddAlbum OncloseModal={closeModal}/>}
            </main>
        </div>
    )
}