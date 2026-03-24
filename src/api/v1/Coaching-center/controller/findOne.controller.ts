import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";

export const findSingleCoachingCenterController = asyncHandler(async(req: Request, res: Response) => {

    const id = req.params.id
    if(!id) throw new apiError(400, 'coaching id required !!!')

    const coachingCenter = await CoachingCenter.findOne({userId: id}).select("-password")
    if(!coachingCenter) throw new apiError(404, 'coaching center profile not found !!!')
    
    res.status(200).json(new apiResponse(200, coachingCenter))
})