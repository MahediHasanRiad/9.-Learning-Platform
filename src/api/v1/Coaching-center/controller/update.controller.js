import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

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
    name,
    email,
    mobile,
    address,
    website,
    bio,
    officeTime,
  } = req.body;

  if (!id) throw new apiError(400, "Coaching Page not found !!!");

  const avatarLocalFilePath = LocalFilePath(req, "avatar");
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

  const avatar = avatarLocalFilePath
    ? await cloudinaryFileUpload(avatarLocalFilePath)
    : "";
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  const updatedData = {};

  if (name) updatedData.name = name;
  if (email) updatedData.email = email;
  if (mobile) updatedData.mobile = mobile;
  if (address) updatedData.address = address;
  if (website) updatedData.website = website;
  if (bio) updatedData.bio = bio;
  if (officeTime) updatedData.officeTime = officeTime;
  if (avatar) updatedData.avatar = avatar;
  if (coverImage) updatedData.coverImage = coverImage;

  const coaching = await CoachingCenter.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );

  res
    .status(200)
    .json(new apiResponse(200, coaching, "updated successfully !!!"));
});
