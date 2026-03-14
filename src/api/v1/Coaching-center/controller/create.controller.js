import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { InputData } from "../validation/input-data.validate.js";
import { CheckCoachingProfile } from "../repository/check-coaching-profile.repository.js";
import { CreateCoaching } from "../repository/create-coaching.repository.js";

export const createCoachingCenterController = asyncHandler(async (req, res) => {
  /**
   * get {name, address} = req.body
   * if(empty) return error
   * if(exist = coaching) return error
   * create a profile
   * res
   */

  const { CcName, address } = req.body;
  const userId = req.user._id;

  // check input data
  await InputData({ CcName, address });

  // exist coaching profile ?
  await CheckCoachingProfile(CcName);

  // create
  const coachingCenter = await CreateCoaching({userId, CcName, address});

  res
    .status(200)
    .json(new apiResponse(200, coachingCenter, "successfully created !!!"));
});
