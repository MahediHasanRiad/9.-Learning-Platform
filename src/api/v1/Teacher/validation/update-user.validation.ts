import type { Request } from "express";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import type { userType } from "../../User/user-types.js";

export interface UpdateType {
  req: Request;
  name?: string | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  password?: string | undefined;
  avatar?: string | undefined;
  coverImage?: string | undefined;
  address?: string | undefined;
  bio?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;}

export const UpdateUserFields = async ({req, name, mobile, address, bio, linkedIn, facebook}: UpdateType) => {

   const avatarLocalFilePath = LocalFilePath(req, "avatar");
    const coverImageLocalFilePath = LocalFilePath(req, "coverImage");
  
    const avatar = avatarLocalFilePath
      ? await cloudinaryFileUpload(avatarLocalFilePath)
      : "";
    const coverImage = coverImageLocalFilePath
      ? await cloudinaryFileUpload(coverImageLocalFilePath)
      : "";
  
    const userUpdated: Partial<userType> = {};
  
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