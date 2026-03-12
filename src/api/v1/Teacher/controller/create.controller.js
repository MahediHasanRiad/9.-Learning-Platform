import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { User } from "../../../../model/user.model.js";

const createTeacherController = asyncHandler(async (req, res) => {
  /**
   * get {education, certificate, experienceOfYears} = req.body
   * if(empty) return error
   * if(!avatar) return error
   * if(!education) return error
   * upload image
   * create
   * res
   */

  const { education, experienceOfYears = 0 } = req.body;

  if ([education].some((item) => item === ""))
    throw new apiError(400, "Education data required !!!");

  // image upload
  const certificateFilePath = LocalFilePath(req, "certificate");

  // upload in cloudinary
  const certificate = certificateFilePath
    ? await cloudinaryFileUpload(certificateFilePath)
    : "";


  // create teacher profile
  const teacher = await Teacher.create({
    userId: req.user._id,
    education,
    certificate: certificate.url || "",
    experienceOfYears,
  });

  // // update user role
  // await User.findByIdAndUpdate(req.user._id, {
  //   role: 'Teacher'
  // })

  // link
  const link = {
    self: `${req.path}`,
  };

  res
    .status(201)
    .json(new apiResponse(201, { teacher, link }, "create teacher profile !"));
});

export { createTeacherController };
