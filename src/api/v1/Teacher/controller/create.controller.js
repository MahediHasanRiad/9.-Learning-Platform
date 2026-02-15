import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

const createTeacherController = asyncHandler(async (req, res) => {
  /**
   * get {name, email, password, mobile, education, certificate, experienceOfYears} = req.body
   * if(empty) return error
   * if(!avatar) return error
   * if(!education) return error
   * upload image
   * create
   * res
   */

  const {
    name,
    email,
    mobile,
    password,
    bio = "",
    education,
    experienceOfYears = 0,
  } = req.body;

  if (
    [name, email, mobile, password, bio, education].some(
      (item) => item.trim() === "",
    )
  )
    throw new apiError(400, "Education data required !!!");

  // image upload
  const avatarLocalFilePath = LocalFilePath(req, "avatar", true);
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");
  const certificateFilePath = LocalFilePath(req, "certificate");

  // upload in cloudinary
  const avatar = await cloudinaryFileUpload(avatarLocalFilePath);
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";
  const certificate = certificateFilePath
    ? await cloudinaryFileUpload(certificateFilePath)
    : "";

  // exist teacher
  const existTeacher = await Teacher.findOne({ email });

  if (existTeacher) throw new apiError(400, "teacher already exist !!!");

  // create teacher profile
  const teacher = await Teacher.create({
    name,
    email,
    mobile,
    password,
    bio,
    education,
    avatar: avatar.url,
    coverImage: coverImage.url || "",
    certificate: certificate.url || "",
    experienceOfYears,
  });

  // link
  const link = {
    self: `${req.path}`,
  };

  res
    .status(201)
    .json(new apiResponse(201, { teacher, link }, "create teacher profile !"));
});

export { createTeacherController };
