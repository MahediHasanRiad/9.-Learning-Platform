import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { InputData } from "../validation/input-data-to-create.validate.js";
import { FindUser } from "../../User/repository/user.repository.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { CreateStaff } from "../repository/create-staff.repository.js";
import { apiError } from "../../../../utils/apiError.js";
import type { Request, Response } from "express";

interface CoachingStaffType {
  staffId: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

export const createStaffController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get id = req.user.id
   * get {userId, coachingCenterId, role, subjects}
   * if(!user) return error
   * if(!coaching) return error
   * create
   * res
   */

  const {role = "Teacher", staffId } = req.body as CoachingStaffType;

  const id = req.user?._id?.toString();
  if(!id) throw new apiError(400, 'invalid token !!!')
  
  // check input value
  await InputData({staffId, role})

  // find user then check coacheing center
  const user = await FindUser(id)
  if(!user) throw new apiError(404, 'user not found !!!')

  // check coaching already exist or not
  const userId = user._id.toString();
  const coaching = await FindCoaching(userId)

  // create
  const coachingId = coaching._id.toString()
  const coachingStaff = await CreateStaff({staffId, coachingId, role})

  res
    .status(201)
    .json(new apiResponse(201, coachingStaff, "successfully created !!!"));
});
