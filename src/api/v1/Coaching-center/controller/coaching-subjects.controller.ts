import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

export const coachingAllSubjectsController = asyncHandler(async(req: Request, res: Response) => {
  
  const id = req.user?.id;
  if(!id) throw new apiError(400, 'Invalid Token !!!')

  const coaching = await prisma.coachingCenter.findFirst({where: {userId: id}})
  if(!coaching) throw new apiError(404, 'No Coaching Page found !')

  const allSubject = await prisma.subject.findMany({where: {userId: id}})
  if(!allSubject) throw new apiError(404, 'No subject created !!')

  res.status(200).json(new apiResponse(200, allSubject))
})