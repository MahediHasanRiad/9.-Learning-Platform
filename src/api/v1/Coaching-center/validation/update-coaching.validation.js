import { apiError } from "../../../../utils/apiError.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

export const CheckValueForUpdate = async ({req, CcName, email, mobile, address, website, facebook, linkedIn, bio, officeTime}) => {
  try {
    const avatarLocalFilePath = LocalFilePath(req, "avatar");
    const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

    const avatar = avatarLocalFilePath
      ? await cloudinaryFileUpload(avatarLocalFilePath)
      : "";
    const coverImage = coverImageLocalFilePath
      ? await cloudinaryFileUpload(coverImageLocalFilePath)
      : "";

    const updatedData = {};

    if (CcName) updatedData.CcName = CcName;
    if (email) updatedData.email = email;
    if (mobile) updatedData.mobile = mobile;
    if (address) updatedData.address = address;
    if (website) updatedData.website = website;
    if (facebook) updatedData.facebook = facebook;
    if (linkedIn) updatedData.linkedIn = linkedIn;
    if (bio) updatedData.bio = bio;
    if (officeTime) updatedData.officeTime = officeTime;
    if (avatar) updatedData.avatar = avatar.url;
    if (coverImage) updatedData.coverImage = coverImage.url;

    return updatedData;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
