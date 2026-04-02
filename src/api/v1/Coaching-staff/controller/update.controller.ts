import type { Request, Response } from "express";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindStaff } from "../repository/find-staff.repository.js";
import { UpdateStaff } from "../repository/update-staff.repository.js";
import { apiError } from "../../../../utils/apiError.js";

export const updateCoachingStaffController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get {role, status, subjects} = req.body
   * get {id} = req.params
   * find staff by id 
   * update 
   * res
   */

  const {role} = req.body

  const id = req.params.id as string;
  if(!id) throw new apiError(400, 'Param id not found !!!') 

  // check staff exist or not
  const existStaff = await FindStaff(id)
  if(!existStaff) throw new apiError(404, 'Staff not found !!!')

  // update
  const staffId = existStaff?.id
  const staff = await UpdateStaff({staffId, role})

  res.status(200).json(new apiResponse(200, staff))
})