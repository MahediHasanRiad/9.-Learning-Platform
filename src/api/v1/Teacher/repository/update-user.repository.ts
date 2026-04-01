import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";
import type { userType } from "../../User/user-types.js";

interface Update {
  userId: string;
  userUpdated: Partial<userType>;
}

export const UpdateUser = async ({ userId, userUpdated }: Update) => {
  try {
    const user = prisma.user.update({
      where: { id: userId },
      data: userUpdated as any,
    });

    return user;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
