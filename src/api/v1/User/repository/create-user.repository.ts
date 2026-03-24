import { apiError } from "../../../../utils/apiError.js";
import { User } from "../model/user.model.js";
import type { userType } from "../user-types.js";

export const CreateUser = async ({
  name = "",
  email = "",
  mobile = "",
  password = "",
  avatar = "",
  coverImage = "",
  address = "",
  bio = "",
}: userType) => {
  try {
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      avatar,
      coverImage,
      address,
      bio,
    });

    if (!user) throw new apiError(500, "server error during create user !!!");

    return user;
  } catch (error) {
    console.log("Create user", error);
  }
};
