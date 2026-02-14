import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";


const deleteTeacherController = asyncHandler(async(req, res) => {

    const {id} = req.params 
    if(!id) throw new apiError(400, 'teacher id required !!!')
    
    const teacher = await Teacher.findByIdAndDelete(id)

    res.status(204).json(new apiResponse(204, {}, 'Teacher profile delete successfully !!!'))

})

export {deleteTeacherController}