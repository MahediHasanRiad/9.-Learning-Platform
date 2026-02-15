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
   * get {name, address, website, subjects, teacherID} = req.body
   * if(empty) return error
   * if(exist = coaching) return error
   * if(!avatar) retrun error
   * upload avatar and coverImage in cloudinary
   * create a profile
   * res
   */

  const {
    name,
    email,
    password,
    contact,
    address,
    city,
    country = "Bangladesh",
    website = "",
    subjectID = "",
    teacherID = "",
    role = "Admin",
  } = req.body;

  if (
    [name, email, password, contact, address, city].some(
      (item) => item.trim() === "",
    )
  )
    throw new apiError(
      400,
      "all field are required !!!",
    );

  // exist coaching profile ?
  const existCoachingProfile = await CoachingCenter.findOne({ name });
  if (existCoachingProfile) throw new apiError(400, "Profile already exist");

  // check subjectID and TeacherId
  const subject = await Subject.findById(subjectID);
  if (!subject) throw new apiError(400, "Subject not found !!!");

  const teacher = await Teacher.findById(teacherID);
  if (!teacher) throw new apiError(400, "Teacher not found !!!");

  // image local path
  const avatarLocalFilePath = LocalFilePath(req, "avatar", true);
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

  // upload image
  const avatar = await cloudinaryFileUpload(avatarLocalFilePath);
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  const coachingCenter = await CoachingCenter.create({
    name,
    email,
    password,
    contact,
    address,
    city,
    country,
    website,
    avatar: avatar.url,
    coverImage: coverImage.url || "",
    subjectID: subject._id || "",
    teacherID: teacher._id || "",
    role,
  });

  res
    .status(200)
    .json(new apiResponse(200, coachingCenter, "successfully created !!!"));
});
