import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import User from '../models/User'

export class Users {

    async create(request: Request, response: Response){

        const {name, email, password} = request.body

        const user = getRepository(User).create({name, email, password})

        const result = await getRepository(User).save(user)

        return response.status(201).json({result})
    }
}
