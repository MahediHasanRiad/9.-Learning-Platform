import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { User } from "../../../../model/user.model.js";

export const createStaffController = asyncHandler(async (req, res) => {
  /**
   * get id = req.user.id
   * get {userId, coachingCenterId, role, subjects}
   * if(!user) return error
   * if(!coaching) return error
   * create
   * res
   */

  const {role = "Teacher", staffId } = req.body;

  if ([staffId, role].some((item) => item?.trim() === ""))
    throw new apiError(400, "coachingCenterId and role are required !!!");

  // exist coacheing center
  const user = await User.findById(req.user._id)
  if(!user) throw new apiError(400, 'invalid token, user not found !!!')
  
  const coaching = await CoachingCenter.findOne({userId: user._id})
  if (!coaching) throw new apiError(400, "Does not have any coaching page !!!");

  // create
  const coachingStaff = await CoachingStaff.create({
    staffId: staffId,
    coachingId: coaching._id,
    role: role
  });

  res
    .status(201)
    .json(new apiResponse(201, coachingStaff, "successfully created !!!"));
});
