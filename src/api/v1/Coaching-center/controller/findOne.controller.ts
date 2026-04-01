import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

export const findSingleCoachingCenterController = asyncHandler(async(req: Request, res: Response) => {

    const id = req.params.id as string
    if(!id) throw new apiError(400, 'coaching id required !!!')

    const coachingCenter = await prisma.coachingCenter.findFirst({where: {id: id}})
    if(!coachingCenter) throw new apiError(404, 'coaching center profile not found !!!')
    
    res.status(200).json(new apiResponse(200, coachingCenter))
})