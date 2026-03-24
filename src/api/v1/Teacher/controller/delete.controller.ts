import { Teacher } from "../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";


const deleteTeacherController = asyncHandler(async(req: Request, res: Response) => {

    const id = req.params.id as string
    if(!id) throw new apiError(400, 'teacher id required !!!')
    
    await Teacher.findByIdAndDelete(id)

    res.status(204).json(new apiResponse(204, {}, 'Teacher profile delete successfully !!!'))

})

export {deleteTeacherController}