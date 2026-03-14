import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindStaff } from "../repository/find-staff.repository.js";
import { UpdateStaff } from "../repository/update-staff.repository.js";

export const updateCoachingStaffController = asyncHandler(async (req, res) => {
  /**
   * get {role, status, subjects} = req.body
   * get {id} = req.params
   * find staff by id 
   * update 
   * res
   */

  const {role} = req.body 
  const {id} = req.params 

  // check staff exist or not
  const existStaff = await FindStaff(id)

  // update
  const staff = await UpdateStaff({id: existStaff._id, role})

  res.status(200).json(new apiResponse(200, staff))
})