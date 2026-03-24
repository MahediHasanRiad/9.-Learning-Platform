import {asyncHandler} from '../../../../utils/asyncHandler.js'
import {apiResponse} from '../../../../utils/apiResponse.js'
import {apiError} from '../../../../utils/apiError.js'
import { FindSubject } from '../repository/find-subject.repository.js'
import { CreateSubject } from '../repository/create-subject.repository.js'
import type { Request, Response } from 'express'


export const createSubjectController = asyncHandler(async(req:Request, res:Response) => {
    /**
     * get {name, class} = req.body
     * if(!name || !class) return error
     * if(exist = subjectName) return error
     * create
     * res
     */

    const {name, className} = req.body
    
    const id = req.user?._id?.toString() 
    if(!id) throw new apiError(400, 'Invalid Token !!!')
    
    if(!name) throw new apiError(400, 'subject name required !!!')
    if(!className) throw new apiError(400, 'class name required !!!')
    
    // check subject exist or not
    await FindSubject({id, name, className})
    
    // create
    const subject = await CreateSubject({id, name, className})

    res.status(201).json(new apiResponse(201, subject, 'successfully subject created'))

})