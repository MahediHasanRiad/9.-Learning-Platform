import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";


export const findSingleSubjectController = asyncHandler(async (req, res) => {
    const {id} = req.params 
    if(!id) throw new apiError(400, 'subject id required !!!')

    const subject = await Subject.findById(id)
    if(!subject) throw new apiError(400, 'subject not found !!!')
    
    res.status(200).json(new apiResponse(200, subject))
})