import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const coachingFindByUserController = asyncHandler( async(req, res) => {

  const coaching = await CoachingCenter.findOne({userId: req.user._id})
  if(!coaching) throw new apiError('Does not have any Coaching Center Page !!!')

  res.status(200).json(new apiResponse(200, coaching))

})