import {asyncHandler} from '../../../../utils/asyncHandler.js'
import {apiResponse} from '../../../../utils/apiResponse.js'
import {apiError} from '../../../../utils/apiError.js'
import { Subject } from '../../../../model/subject.model.js'

export const createSubjectController = asyncHandler(async(req, res) => {
    /**
     * get {name, class} = req.body
     * if(!name || !class) return error
     * if(exist = subjectName) return error
     * create
     * res
     */

    const {name, className} = req.body 
    if(!name) throw new apiError(400, 'subject name required !!!')
    if(!className) throw new apiError(400, 'class name required !!!')
    
    const subjectExist = await Subject.findOne({$and: [name, className]})
    if(subjectExist) throw new apiError(400, 'already exist')
    
    const subject = await Subject.create({
        name,
        className
    })

    res.status(201).json(new apiResponse(201, subject, 'successfully subject created'))

})