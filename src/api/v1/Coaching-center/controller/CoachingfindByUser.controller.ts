import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";

export const coachingFindByUserController = asyncHandler( async(req: Request, res: Response) => {

  if(!req.user?._id) throw new apiError(400, 'invalid token !!!')

  const coaching = await CoachingCenter.findOne({userId: req.user._id})
  if(!coaching) throw new apiError(404, 'Does not have any Coaching Center Page !!!')

  res.status(200).json(new apiResponse(200, coaching))

})