import { throws } from 'assert'
import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import User from '../models/User'

export class Login {

    async login(request: Request, response: Response){
        
        const {email, password} = request.body

        const user = await getRepository(User).findOne({ email: email, password: password})

        if (!user) {
            return response.json({message: "incorrect credentials"})
        }

        return response.json({user})
    }

}
