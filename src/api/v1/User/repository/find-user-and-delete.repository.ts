import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";


export const FindUserThenDelete = async (id: string) => {
  try {
    const user = await prisma.user.delete({where: {id: id}});
    if (!user) throw new apiError(404, "user not found !!!");
  } 
  catch (error: any) {
    throw new apiError(404, error?.message);
  }
};
