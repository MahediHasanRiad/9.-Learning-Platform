import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

export const UpdateUserFields = async ({req, name, mobile, address, bio, linkedIn, facebook}) => {


   const avatarLocalFilePath = LocalFilePath(req, "avatar");
    const coverImageLocalFilePath = LocalFilePath(req, "coverImage");
  
    const avatar = avatarLocalFilePath
      ? await cloudinaryFileUpload(avatarLocalFilePath)
      : "";
    const coverImage = coverImageLocalFilePath
      ? await cloudinaryFileUpload(coverImageLocalFilePath)
      : "";
  
    const userUpdated = {};
  
    if (name) userUpdated.name = name;
    if (mobile) userUpdated.mobile = mobile;
    if (address) userUpdated.address = address;
    if (bio) userUpdated.bio = bio;
    if (linkedIn) userUpdated.linkedIn = linkedIn;
    if (facebook) userUpdated.facebook = facebook;
    if (avatar?.url) userUpdated.avatar = avatar.url;
    if (coverImage?.url) userUpdated.coverImage = coverImage.url;

    return userUpdated
}