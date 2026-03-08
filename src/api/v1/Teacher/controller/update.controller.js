import { Teacher } from "../../../../model/Teacher.model.js";
import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

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
  const teacher = await Teacher.findById(id);
  if (!teacher) throw new apiError(404, "teacher not found");

  if (teacher.userId.toString() !== req.user._id.toString()) {
    throw new apiError(403, "unauthorized");
  }

  const updateTeacher = { education, availableDay, availableTime, experience };

  const certificateLocalPaths = LocalFilePath(req, "certificate");

  if (certificateLocalPaths?.length) {
    const uploads = [];
    for (const path of certificateLocalPaths) {
      const file = await cloudinaryFileUpload(path);
      uploads.push(file.url);
    }

    updateTeacher.certificate = uploads;
  }

  const updatedTeacher = await Teacher.findByIdAndUpdate(
    id,
    { $set: updateTeacher },
    { new: true },
  );

  // update user
  const avatarLocalFilePath = LocalFilePath(req, "avatar");
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

  const avatar = avatarLocalFilePath
    ? await cloudinaryFileUpload(avatarLocalFilePath)
    : "";
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  const userUpdated = {
    name,
    mobile,
    address,
    bio,
    linkedIn,
    facebook,
  };
  if (avatar?.url) {
    userUpdated.avatar = avatar.url;
  }

  if (coverImage?.url) {
    userUpdated.coverImage = coverImage.url;
  }

  const updateUser = await User.findByIdAndUpdate(
    req.user._id,
    { $set: userUpdated },
    { new: true },
  );

  res.status(200).json(new apiResponse(200, { updateUser, updatedTeacher }));
});

export { updateTeacherController };
