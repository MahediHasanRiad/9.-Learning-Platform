import type { ImageType, userType } from "../user-types.js";

interface InputUserType {
  name: string;
  email: string;
  mobile: string;
  password: string;
  avatar: ImageType;
  coverImage?: ImageType;
  address?: string;
  bio?: string;
  facebook?: string,
  linkedIn?: string
}

export const InputValue = ({
  name,
  address,
  email,
  mobile,
  // role,
  avatar,
  coverImage,
  facebook,
  linkedIn,
}: Partial<InputUserType>) => {
  const updatedData: Partial<userType> = {};

  if (name !== undefined) updatedData.name = name;
  if (address !== undefined) updatedData.address = address;
  if (email !== undefined) updatedData.email = email;
  if (mobile !== undefined) updatedData.mobile = mobile;
  // if (role !== undefined) updatedData.role = role;
  if (avatar !== undefined) updatedData.avatar = avatar.url;
  if (coverImage !== undefined) updatedData.coverImage = coverImage.url;
  if (facebook !== undefined) updatedData.facebook = facebook;
  if (linkedIn !== undefined) updatedData.linkedIn = linkedIn;

  return updatedData;
};
