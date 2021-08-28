import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import User from '../models/User'

export class Login {

    async login(request: Request, response: Response){
        
        const {email, password} = request.body

        const user = await getRepository(User).findOne({ email: email, password: password})

        if (!user) {
            return response.status(401).json({status: 401, responseData : "incorrect credentials"})
        }
        return response.status(200).json({status: 200, responseData:{id: user.id, name:user.name, email:user.email} })
    }

}
