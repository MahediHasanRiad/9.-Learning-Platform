import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { User } from "../../../../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { apiError } from "../../../../utils/apiError.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";

const updateUserController = asyncHandler(async (req, res) => {
  const { name, address, email, password, mobile, role, facebook, linkedIn } = req.body;
  const { id } = req.params;

  const existUser = await User.findById(id);
  if (!existUser) throw new apiError(404, "user not found !!!");

  const avatarLocalFilePath = LocalFilePath(req, 'avatar')
  const coverImageLocalFilePath = LocalFilePath(req, 'coverImage')

  const avatar = avatarLocalFilePath ? await cloudinaryFileUpload(avatarLocalFilePath) : ''
  const coverImage = coverImageLocalFilePath ? await cloudinaryFileUpload(coverImageLocalFilePath) : ''

  const user = await User.findByIdAndUpdate(id, {
    name: name || existUser.name,
    address: address || existUser.address,
    email: email || existUser.email,
    mobile: mobile || existUser.mobile,
    password: password || existUser.password,
    role: role || existUser.role,
    avatar: avatar.url || existUser.avatar,
    coverImage: coverImage.url || existUser.coverImage,
    facebook: facebook || existUser.facebook,
    linkedIn: linkedIn || existUser.linkedIn,
  });

  res.status(200).json(new apiResponse(200, user, "successfully updated !!!"));
});

export { updateUserController };
