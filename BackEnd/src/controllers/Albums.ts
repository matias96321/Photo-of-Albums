import { Request, Response } from "express";
import {getRepository} from 'typeorm'
import Album from "../models/Album";

export class Albums{
    
    async Index(request: Request, response: Response){

        const { id } = request.params

        const albums = await getRepository(Album).find({where: {user: id}})

        return response.status(200).json({code: 200, responseData: albums})
    }

    async Show(request: Request, response: Response){
        
        const { id } = request.params

        const albums = await getRepository(Album).findOne({where: {id: id}})

        return response.status(200).json({code: 200, responseData: albums})

    }

    async Create(request: Request, response: Response){

        const { title, description, user_id } = request.body

        

        const albumCreate = getRepository(Album).create({ title, description, user: user_id })
        
        const result = await getRepository(Album).save(albumCreate)

        if (!result)
        return response.status(500).json({code: 500, message: "Error Internal"})

        return response.status(200).json({result})

    }

    async Update(request: Request, response: Response){

    }

    async Destroy(request: Request, response: Response){
        
    }
}