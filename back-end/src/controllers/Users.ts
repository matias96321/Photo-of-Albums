import { throws } from 'assert'
import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import User from '../models/User'

export class Users {

    async index(request: Request, response: Response){
        
        const {id} = request.params
        
        const user = await getRepository(User).findOneOrFail(id)

        if (!user) {
            throw new Error('User not exist!')
        }

        return response.json({user})
    }
    
    async show(request: Request, response: Response){
        
        const user = await getRepository(User).find()

        if (!user) {
            return response.json({message: "incorrect credentials"})
        }

        return response.json({user})
    }

    async create(request: Request, response: Response){

        const {name, email, password} = request.body

        const user = getRepository(User).create({name, email, password})

        const result = await getRepository(User).save(user)

        return response.status(201).json({result})
    }

}
