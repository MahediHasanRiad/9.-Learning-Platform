import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const updateOrCreateSubjectController = asyncHandler(async(req, res) => {
    /**
     * get {name, className} = req.body
     * if(!name || !className) return error
     * if(exist = subject) then update
     * if(!exits) create new
     * res 
     */

    const {name, className} = req.body 
    if(!name) throw new apiError(400, 'subject name required !!!')
    if(!className) throw new apiError(400, 'className required !!!')
    
    const existSubject = await Subject.findOne({name, className})

    // create
    if(!existSubject){
        const subject = await Subject.create({
            name,
            className
        })

        res.status(201).json(new apiResponse(201, subject, 'new subject created !'))
    }else{
        // update
        existSubject.name = name || existSubject.name,
        existSubject.className = className || existSubject.className
        existSubject.save()

        res.status(200).json(new apiResponse(200, existSubject, 'subject updated !'))
    }
})