import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const ExistUser = async (email: string) => {
  try {
    const existUser = await prisma.user.findUnique({where: {email: email}})
    if (existUser) throw new apiError(400, "Exist User !!!");
  } 
  catch (error) {
    console.log("Exist User", error);
  }
};
