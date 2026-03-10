import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const batchListByCoachingIdController = asyncHandler(async () => {
 

  const coaching = await CoachingCenter.find({userId: req.user._id})
  if(!coaching) throw new apiError('Does not have any Coaching Page')

  
})