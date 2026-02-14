import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

const createTeacherController = asyncHandler(async (req, res) => {
  /**
   * get {bio, education, certificate, experienceOfYears} = req.body
   * get userId = req.cookies
   * if(!education) return error
   * upload certificate as a image
   * if(existTeacher) return error
   * create
   * res
   */

  const { bio = "", education, experienceOfYears = 0 } = req.body;

  if (!education) throw new apiError(400, "Education data required !!!");

  const user = await User.findById(req.user._id);
  if (!user) throw new apiError(400, "invelid token !!!");

  // upload certificate
  const certificateFilePath = LocalFilePath(req, "certificate");
  const certificate = certificateFilePath
    ? await cloudinaryFileUpload(certificateFilePath)
    : "";

  // exist teacher or not
  const existTeacher = await Teacher.findOne({ userID: req.user._id });
  if (existTeacher) throw new apiError(400, "Teacher already exist !!!");

  // create teacher profile
  const teacher = await Teacher.create({
    userID: req.user._id,
    bio,
    education,
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
