import { User } from "../model/user.model.js";

export const CreateUser = async ({name, email, mobile, password, avatar, coverImage, address, bio}) => {
  try {
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      avatar: avatar.url || "",
      coverImage: coverImage.url || "",
      address,
      bio,
    });

    if (!user) throw new apiError(500, "server error during create user !!!");

    return user;
  } 
  catch (error) {
    console.log("Create user", error);
  }
};
