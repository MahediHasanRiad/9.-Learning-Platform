import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { apiError } from "../../../../utils/apiError.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { Subject } from "../../../../model/subject.model.js";
import { Teacher } from "../../../../model/Teacher.model.js";

export const createCoachingCenterController = asyncHandler(async (req, res) => {
  /**
   * get {name, address} = req.body
   * if(empty) return error
   * if(exist = coaching) return error
   * create a profile
   * res
   */

  const { CcName, address } = req.body;

  if ([CcName, address].some((item) => item?.trim?.() === ""))
    throw new apiError(400, "all field are required !!!");

  // exist coaching profile ?
  const existCoachingProfile = await CoachingCenter.findOne({ CcName });
  if (existCoachingProfile) throw new apiError(400, "Profile already exist");

  const coachingCenter = await CoachingCenter.create({
    CcName,
    address,
    userId: req.user._id,
  });

  res
    .status(200)
    .json(new apiResponse(200, coachingCenter, "successfully created !!!"));
});
