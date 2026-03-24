import type { Request } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import type { CoachingType } from "../coaching-type.js";

interface updateType {
  CcName?: string | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  address?: string | undefined;
  website?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
  bio?: string | undefined;
  officeTime?: string | undefined;
  avatar?: string | undefined;
  coverImage?: string | undefined;
}

interface Update extends updateType {
  req: Request;
}

export const CheckValueForUpdate = async ({req, CcName, email, mobile, address, website, facebook, linkedIn, bio, officeTime}: Update) => {
  try {
    const avatarLocalFilePath = LocalFilePath(req, "avatar");
    const coverImageLocalFilePath = LocalFilePath(req, "coverImage");

    const avatar = avatarLocalFilePath
      ? await cloudinaryFileUpload(avatarLocalFilePath)
      : "";
    const coverImage = coverImageLocalFilePath
      ? await cloudinaryFileUpload(coverImageLocalFilePath)
      : "";

    const updatedData: Partial<CoachingType> = {};

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
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message);
  }
};
