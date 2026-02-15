import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const deleteCoachingCenterController = asyncHandler(async (req, res) => {
  const {id} = req.params 
  if(!id) throw new apiError(400, 'id not found !!!')

    await CoachingCenter.findByIdAndDelete(id)

    res.status(200).json(new apiResponse(400, null, 'delete success fully'))
})