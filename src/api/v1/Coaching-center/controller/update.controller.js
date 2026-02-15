import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const updateCoachingCenterController = asyncHandler(async (req, res) => {
  /**
   * get id = req.user.id
   * get {name, address, website, subjects, teacherID} = req.body
   * if(exist != coaching) return error
   * update profile
   * res
   */

  const {id} = req.params 
  const { name, mobile, address, website, city, subjects, teacher } = req.body;

  if(!id) throw new apiError(400, 'id not found !!!')

  const coaching = await CoachingCenter.findByIdAndUpdate(id, {
    name,
    mobile,
    address,
    website,
    city,
    subjects,
    teacher
  })

  res.status(200).json(new apiResponse(200, coaching, 'updated successfully !!!'))
  
});
