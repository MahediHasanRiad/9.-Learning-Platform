import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { CheckValueForUpdate } from "../validation/update-coaching.validation.js";
import { UpdateData } from "../repository/update-coaching.repository.js";

export const updateCoachingCenterController = asyncHandler(async (req, res) => {
  /**
   * get id = req.user.id
   * get {name, address, website, subjects, teacherID} = req.body
   * if(exist != coaching) return error
   * upload avatar & coverImage
   * update profile
   * res
   */

  const { id } = req.params;
  const {
    CcName,
    email,
    mobile,
    address,
    website,
    facebook,
    linkedIn,
    bio,
    officeTime,
  } = req.body;

  if (!id) throw new apiError(400, "Coaching Page not found !!!");

  // check input value for update
  const updatedData = await CheckValueForUpdate({req, CcName, email, mobile, address, website, facebook, linkedIn, bio, officeTime})

  // update
  const coaching = await UpdateData({id, updatedData})

  res
    .status(200)
    .json(new apiResponse(200, coaching, "updated successfully !!!"));
});
