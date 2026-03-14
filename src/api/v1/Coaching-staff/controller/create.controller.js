import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";
import { User } from "../../User/model/user.model.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { InputData } from "../validation/input-data-to-create.validate.js";
import { FindUser } from "../../User/repository/user.repository.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { CreateStaff } from "../repository/create-staff.repository.js";


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
  const id = req.user._id;
  
  // check input value
  await InputData({staffId, role})

  // find user then check coacheing center
  const user = await FindUser(id)

  // check coaching already exist or not
  const coaching = await FindCoaching({userId: user?._id})

  // create
  const coachingStaff = await CreateStaff({staffId, coachingId: coaching?._id, role})

  res
    .status(201)
    .json(new apiResponse(201, coachingStaff, "successfully created !!!"));
});
