import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { FindUser } from "../repository/user.repository.js";
import { UpdateUser } from "../repository/update-user.repository.js";
import { InputValue } from "../validation/input-value.validation.js";

const updateUserController = asyncHandler(async (req, res) => {
  const { name, address, email, mobile, role, facebook, linkedIn } = req.body;
  const { id } = req.params;

  // check user exist or not
  await FindUser(id);

  // check image local path
  const avatarLocalFilePath = LocalFilePath(req, "avatar");
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

  // image upload in cloudinary
  const avatar = avatarLocalFilePath
    ? await cloudinaryFileUpload(avatarLocalFilePath)
    : "";
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  // verify input data
  const updated = InputValue({
    name,
    address,
    email,
    mobile,
    role,
    avatar,
    coverImage,
    facebook,
    linkedIn,
  });

  // update
  const user = await UpdateUser({
    id,
    updated,
  });

  res.status(200).json(new apiResponse(200, user, "successfully updated !!!"));
});

export { updateUserController };
