import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const coachingAllSubjectsController = asyncHandler(async(req, res) => {
  const coaching = await CoachingCenter.findOne({userId: req.user._id})
  if(!coaching) throw new apiError('No Coaching Page found !')

  const allSubject = await Subject.find({userId: coaching._id})
  if(!allSubject) throw new apiError('No subject created !!')

  res.status(200).json(new apiResponse(200, allSubject))
})