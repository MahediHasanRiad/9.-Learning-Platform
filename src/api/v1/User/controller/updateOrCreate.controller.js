import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";

const updateOrCreateController = asyncHandler(async (req, res) => {
  /**
   * get {id} = req.params
   * if(!id) return error
   * get {name, mobile, role} = req.body
   * if(empty) return error
   * check name in db
   * if(!avater) return error
   * if(!name) create new
   * update
   * res
   */

  const { name, email, password, mobile, role, classLevel, subjectOfInterest } = req.body;
  const { id } = req.params;

  if ([name, email, password, mobile, role, classLevel].some((item) => item === ""))
    throw new apiError(400, "all field are required");

  const avatarFilePath = req.files?.avatar[0]?.path;
  const coverImageFilePath = req.files?.coverImage[0].path;

  if (!avatarFilePath) throw new apiError(400, "avatarFilePath not found !!!");

  const avatar = await cloudinaryFileUpload(avatarFilePath);
  const coverImage = await cloudinaryFileUpload(coverImageFilePath);

  const existUser = await User.findById(id);

  // create
  if (!existUser) {
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      avatar: avatar.url || '',
      coverImage: coverImage.url || '',
      role,
      classLevel,
      subjectOfInterest
    });

    res.status(200).json(new apiResponse(201, user, "new user created !"));
  }

  // update
  if (existUser) {
    const user = await User.findByIdAndUpdate(id, {
      name: name || existUser.name,
      email: email || existUser.email,
      mobile: mobile || existUser.mobile,
      password: password || existUser.password,
      avatar: avatar.url || existUser.avatar,
      coverImage: coverImage.url || existUser.coverImage,
      role: role || existUser.role,
    });

    res.status(200).json(new apiResponse(200, user));
  }
});

export { updateOrCreateController };
