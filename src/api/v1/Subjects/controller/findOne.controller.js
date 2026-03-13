import { Subject } from "../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindSubjectById } from "../repository/find-subject-by-id.repository.js";


export const findSingleSubjectController = asyncHandler(async (req, res) => {
    
    const {id} = req.params 
    if(!id) throw new apiError(400, 'subject id required !!!')

    // find subject
    const subject = await FindSubjectById(id)
    
    res.status(200).json(new apiResponse(200, subject))
})