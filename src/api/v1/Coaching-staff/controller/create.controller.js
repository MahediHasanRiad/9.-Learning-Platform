import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { User } from "../../../../model/user.model.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const createStaffController = asyncHandler(async (req, res) => {
  /**
   * get id = req.user.id
   * get {userId, coachingCenterId, role, subjects}
   * if(!user) return error
   * if(!coaching) return error
   * create
   * res
   */

  const {
    userName,
    coachingCenterName,
    role = "Teacher",
    subjectId,
  } = req.body;


  if ([coachingCenterName, role].some((item) => item.trim() === ""))
    throw new apiError(400, "coachingCenterId and role are required !!!");

  if (role !== "Teacher") {
    const user = await User.findOne({ name });
    if (!user) throw new apiError(404, "user not found !!!");
  }

  // exist user
  const user = await Teacher.findOne({ name });
  if (!user) throw new apiError("invalid teacher id !!!");

  // exist coacheing center
  const coaching = await CoachingCenter.findOne({ name });
  if (!coaching) throw new apiError(400, "invalid coaching center id !!!");

  const coachingStaff = await CoachingStaff.create({
    userName,
    coachingCenterName,
    role,
    subjectId
  });

  res.status(201).json(new apiResponse(201, coachingStaff, 'successfully created !!!'))

});
