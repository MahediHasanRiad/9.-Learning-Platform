import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";
import { HashPassword } from "../../Auth/service/password.js";
import type { CreateUserType } from "../user-types.js";

export const CreateUser = async ({
  name = "",
  email = "",
  mobile = "",
  password = "",
  avatar = "",
  coverImage = "",
  address = "",
  bio = "",
}: CreateUserType) => {
  try {

    const hashPass = await HashPassword(password)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        password: hashPass,
        avatar,
        coverImage: coverImage ? coverImage : null,
        address: address ? address : null,
        bio: bio ? bio : null,
      },
    });

    if (!user) throw new apiError(500, "server error during create user !!!");

    return user;
  } catch (error) {
    console.log("Create user", error);
  }
};
