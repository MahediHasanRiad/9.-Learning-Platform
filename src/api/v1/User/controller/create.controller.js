import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { User } from "../../../../model/user.model.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../utils/image_local_File_Path.js";

export const createUserController = asyncHandler(async (req, res) => {
  /**
   * get {name, email, password, mobile, avatar, coverImage, role} = req.body
   * if(empty) return error
   * if(exist) = email
   * return exist user
   * image upload in cloudinary
   * create user
   * res
   */

  const { name, email, password, mobile, role } = req.body;

  if ([name, email, password, mobile, role].some((item) => item === "")) {
    throw new apiError(400, "all field are required !!!");
  }

  const existUser = await User.findOne({ email });
  if (existUser) throw new apiError(400, "Exist User !!!");

  const avaterLocalPath = LocalFilePath(req, 'avatar', true)
  const coverImageLocalPath = LocalFilePath(req, 'coverImage')



  const avatar = await cloudinaryFileUpload(avaterLocalPath);
  const coverImage = coverImageLocalPath ? await cloudinaryFileUpload(coverImageLocalPath) : ''

  const user = await User.create({
    name,
    email,
    mobile,
    password,
    avatar: avatar.url || "",
    coverImage: coverImage.url || "",
    role,
  });

  const rmUser = await User.findById(user.id).select("-password");

  if (!user) throw new apiError(500, "server error during create user !!!");

  // add self link
  const link = {
    self: `/users/${user._id}`,
  };

  res
    .status(201)
    .json(new apiResponse(201, { rmUser, link }, "successfully created !"));
});
