import {Router} from 'express'
import { Users } from './controllers/Users'
import { Login } from './controllers/login'
const router = Router()

router.post('/api/users', new Users().create)
router.get('/api/users/:id', new Users().index)
router.get('/api/users', new Users().show)

router.post('/api/login', new Login().login)

export default router