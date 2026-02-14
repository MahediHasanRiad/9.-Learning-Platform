import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";


const updateTeacherController = asyncHandler(async(req, res) => {

    /**
     * get {bio, education, certificate, experienceOfYears} = req.body
     * update
     * res
     */

    const {bio, education, experienceOfYears} = req.body 
    const {id} = req.params 

    const teacher = await Teacher.findById(id)
    if(!teacher) throw new apiError(404, 'teacher not found !!!')

    // update
    teacher.bio = bio || teacher.bio,
    teacher.education = education || teacher.education,
    teacher.experienceOfYears = experienceOfYears || teacher.experienceOfYears
    
    await teacher.save()

    res.status(200).json(new apiResponse(200, teacher))

})

export {updateTeacherController}