import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

const findSingleTeacherController = asyncHandler(async (req, res) => {

    const {id} = req.params 
    if(!id) throw new apiError(400, 'teacher id required !!!')
    
    const teacher = await Teacher.findById(id).populate("userID", "-password")
    if(!teacher) throw new apiError(404, 'teacher not found !!!')
    
    res.status(200).json(new apiResponse(200, teacher))

})

export {findSingleTeacherController}