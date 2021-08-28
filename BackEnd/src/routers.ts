import {Router} from 'express';
import { Users } from './controllers/User';
import { Login } from './controllers/Login';
import { Albums } from './controllers/Albums';
import { Images } from './controllers/Images'

const router = Router();

router.post('/api/users', new Users().create);
router.get('/api/users/:id', new Users().index);
router.get('/api/users', new Users().show);

router.get('/api/users/:id/albums', new Albums().Index);
router.post('/api/users/albums', new Albums().Create);

router.get('/api/users/albums/:id/images', new Images().Index)
router.get('/api/users/albums/:album_ai/images/:image_id', new Images().show)
router.post('/api/users/albums/images', new Images().Create)


router.post('/api/login', new Login().login)

export default router