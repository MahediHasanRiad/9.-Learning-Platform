import { prisma } from "../../../../lib/prisma.js";
import type { userType } from "../user-types.js";

interface UpdateUserType {
  id: string,
  updated: Partial<userType>
}

export const UpdateUser = async ({ id, updated }: UpdateUserType) => {
  try {

    const user = await prisma.user.update({where: {id: id}, data: updated as any})

    return user;
  } catch (error) {
    console.log("Update user", error);
  }
};
