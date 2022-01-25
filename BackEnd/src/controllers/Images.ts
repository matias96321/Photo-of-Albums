import { Request, Response } from "express";
import {getRepository} from 'typeorm'
import Image from '../models/Image'

export class Images{
    
    async Index(request: Request, response: Response){
        
        const {id} = request.params;

        const result = await getRepository(Image).find({where:{album: id}})

        if(!result)
        return response.status(400).json({code: 400, responseData: null})

        return response.status(200).json({code: 200, responseData: result})

    }

    async show(request: Request, response: Response){
        
        const { album_ai , image_id } = request.params

        const result = await getRepository(Image).findOne({where:{album: album_ai, id: image_id}})

        if(!result)
        return response.status(200).json({code: 200, responseData: null})

        return response.status(200).json({code: 200, responseData: result})

    }

    async Create(request: Request, response:Response){

        const { title, description, date, size, color, album_id, firebase_url } = request.body

        const imageCreate = await getRepository(Image).create({title, description, date, size, color, firebase_url, album: album_id})

        const result = await getRepository(Image).save(imageCreate)

        if(!result)
        return response.status(200).json({code: 200, responseData: null})

        return response.status(200).json({code: 200, responseData: result})

    }

    async Destroy(request: Request, response: Response){
        
        const { image_id } = request.params
        
        const id = parseInt(image_id)

        const result = await getRepository(Image).delete({id: id})

        if(!result)
        return response.status(200).json({code: 200, responseData: null})

        return response.status(200).json({code: 200, responseData: result})
        
    }

    
}