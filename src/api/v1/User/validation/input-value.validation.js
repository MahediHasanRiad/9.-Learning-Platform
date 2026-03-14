export const InputValue = ({
  name,
  address,
  email,
  mobile,
  role,
  avatar,
  coverImage,
  facebook,
  linkedIn,
}) => {
  const updatedData = {};

  if (name !== undefined) updatedData.name = name;
  if (address !== undefined) updatedData.address = address;
  if (email !== undefined) updatedData.email = email;
  if (mobile !== undefined) updatedData.mobile = mobile;
  if (role !== undefined) updatedData.role = role;
  if (avatar !== undefined) updatedData.avatar = avatar.url;
  if (coverImage !== undefined) updatedData.coverImage = coverImage.url;
  if (facebook !== undefined) updatedData.facebook = facebook;
  if (linkedIn !== undefined) updatedData.linkedIn = linkedIn;

  return updatedData
}