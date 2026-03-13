import {asyncHandler} from '../../../../utils/asyncHandler.js'
import {apiResponse} from '../../../../utils/apiResponse.js'
import {apiError} from '../../../../utils/apiError.js'
import { Subject } from '../model/subject.model.js'
import { FindSubject } from '../repository/find-subject.repository.js'
import { CreateSubject } from '../repository/create-subject.repository.js'

export const createSubjectController = asyncHandler(async(req, res) => {
    /**
     * get {name, class} = req.body
     * if(!name || !class) return error
     * if(exist = subjectName) return error
     * create
     * res
     */

    const {name, className} = req.body
    const id = req.user._id 
    
    if(!name) throw new apiError(400, 'subject name required !!!')
    if(!className) throw new apiError(400, 'class name required !!!')
    
    // check subject exist or not
    await FindSubject(id)
    
    // create
    const subject = await CreateSubject(id)

    res.status(201).json(new apiResponse(201, subject, 'successfully subject created'))

})