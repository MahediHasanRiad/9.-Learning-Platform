import { Subject } from "../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";

export const deleteSubjectController = asyncHandler(async(req: Request, res: Response) => {
    
    const id = req.params.id as string
    if(!id) throw new apiError(400, 'id not found !!!')

    await Subject.findByIdAndDelete(id)

    res.status(204).json(new apiResponse(204, {}, 'Delete successfully !'))
})