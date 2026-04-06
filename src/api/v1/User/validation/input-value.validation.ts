import type { user, userType } from "../user-types.js";

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
  const updatedData: Partial<user> = {};

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
