import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Subject } from "../../Subjects/model/subject.model.js";
import type { Request, Response } from "express";

export const coachingAllSubjectsController = asyncHandler(async(req: Request, res: Response) => {
  
  const id = req.user?._id;
  if(!id) throw new apiError(400, 'Invalid Token !!!')

  const coaching = await CoachingCenter.findOne({userId: id})
  if(!coaching) throw new apiError(404, 'No Coaching Page found !')

  const allSubject = await Subject.find({userId: id})
  if(!allSubject) throw new apiError(404, 'No subject created !!')

  res.status(200).json(new apiResponse(200, allSubject))
})