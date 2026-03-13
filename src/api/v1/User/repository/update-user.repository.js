import { User } from "../model/user.model.js";

export const UpdateUser = async ({
  id,
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

  if (name) updatedData.name = name;
  if (address) updatedData.address = address;
  if (email) updatedData.email = email;
  if (mobile) updatedData.mobile = mobile;
  if (role) updatedData.role = role;
  if (avatar) updatedData.avatar = avatar.url;
  if (coverImage) updatedData.coverImage = coverImage.url;
  if (facebook) updatedData.facebook = facebook;
  if (linkedIn) updatedData.linkedIn = linkedIn;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: updatedData,
      },
      { new: true },
    );

    return user
  } 
  catch (error) {
    console.log("Update user", error);
  }
};
