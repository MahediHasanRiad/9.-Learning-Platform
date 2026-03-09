import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const coachingAllStaffController = asyncHandler(async (req, res) => {
  const coaching = await CoachingCenter.findOne({ userId: req.user._id });
  if (!coaching) throw new apiError("Does not have any coaching center !");

  const allStaff = await CoachingStaff.find({ coachingId: coaching._id })
    .populate("staffId", "name avatar")
    .populate("coachingId", "CcName");
  if (!allStaff) throw new apiError("No staff added !");

  res.status(200).json(new apiResponse(200, allStaff));
});
