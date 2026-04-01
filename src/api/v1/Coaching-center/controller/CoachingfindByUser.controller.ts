import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

export const coachingFindByUserController = asyncHandler( async(req: Request, res: Response) => {

  if(!req.user?.id) throw new apiError(400, 'invalid token !!!')

  const coaching = await prisma.coachingCenter.findFirst({where: {userId: req.user.id}})
  if(!coaching) throw new apiError(404, 'Does not have any Coaching Center Page !!!')

  res.status(200).json(new apiResponse(200, coaching))

})