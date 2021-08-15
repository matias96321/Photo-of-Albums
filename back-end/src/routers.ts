import {Router} from 'express'
import { Users } from './controllers/Users'
const router = Router()

router.post('/api/users', new Users().create)

export default router