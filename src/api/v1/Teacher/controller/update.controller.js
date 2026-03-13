import { Teacher } from "../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { User } from "../../User/model/user.model.js";


const updateTeacherController = asyncHandler(async (req, res) => {
  const {
    name,
    mobile,
    address,
    bio,
    facebook,
    linkedIn,
    education,
    availableDay,
    availableTime,
    experience,
  } = req.body;
  const { id } = req.params;

  // update teacher
  const findTeacher = await Teacher.findById(id);
  if (!findTeacher) throw new apiError(404, "teacher not found");

  if (findTeacher.userId.toString() !== req.user._id.toString()) {
    throw new apiError(403, "unauthorized");
  }

  const updatedTeacher = { education, availableDay, availableTime, experience };

  const certificateLocalPaths = LocalFilePath(req, "certificate");

  if (certificateLocalPaths?.length) {
    const uploads = [];
    for (const path of certificateLocalPaths) {
      const file = await cloudinaryFileUpload(path);
      uploads.push(file.url);
    }

    updatedTeacher.certificate = uploads;
  }

  const teacher = await Teacher.findByIdAndUpdate(
    id,
    { $set: updatedTeacher },
    { new: true },
  ).populate("userId subjects");

  // update user
  const avatarLocalFilePath = LocalFilePath(req, "avatar");
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

  const avatar = avatarLocalFilePath
    ? await cloudinaryFileUpload(avatarLocalFilePath)
    : "";
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  const userUpdated = {};

  if (name) userUpdated.name = name;
  if (mobile) userUpdated.mobile = mobile;
  if (address) userUpdated.address = address;
  if (bio) userUpdated.bio = bio;
  if (linkedIn) userUpdated.linkedIn = linkedIn;
  if (facebook) userUpdated.facebook = facebook;
  if (avatar?.url) userUpdated.avatar = avatar.url;
  if (coverImage?.url) userUpdated.coverImage = coverImage.url;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: userUpdated },
    { new: true },
  );

  res.status(200).json(new apiResponse(200, { user, teacher }));
});

export { updateTeacherController };
