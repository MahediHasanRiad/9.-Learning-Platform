import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const updateCoachingStaffController = asyncHandler(async (req, res) => {
  /**
   * get {role, status, subjects} = req.body
   * get {id} = req.params
   * find staff by id 
   * update 
   * res
   */

  const {role, subjects, status} = req.body 
  const {id} = req.params 

  const staff = await CoachingStaff.findById(id).select("-password")
  if(!staff) throw new apiError(400, 'staff not found !!!')

  staff.role = role || staff.role,
  staff.subjects = subjects || staff.subjects,
  staff.status = status || staff.status
  await staff.save()

  res.status(200).json(new apiResponse(200, staff))
})