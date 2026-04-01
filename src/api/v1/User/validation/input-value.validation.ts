import type { userType } from "../user-types.js";

export type user = {
  name?: string | undefined;
  address?: string | null | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  avatar?: any;
  coverImage?: any;
  facebook?: string | null | undefined;
  linkedIn?: string | null | undefined;
};

export const InputValue = ({
  name,
  address,
  email,
  mobile,
  avatar,
  coverImage,
  facebook,
  linkedIn,
}: Partial<user>) => {
  const updatedData: Partial<userType> = {};

  if (name !== undefined) updatedData.name = name;
  if (address !== undefined) updatedData.address = address;
  if (email !== undefined) updatedData.email = email;
  if (mobile !== undefined) updatedData.mobile = mobile;
  if (avatar !== undefined) updatedData.avatar = avatar;
  if (coverImage !== undefined) updatedData.coverImage = coverImage;
  if (facebook !== undefined) updatedData.facebook = facebook;
  if (linkedIn !== undefined) updatedData.linkedIn = linkedIn;

  return updatedData;
};
