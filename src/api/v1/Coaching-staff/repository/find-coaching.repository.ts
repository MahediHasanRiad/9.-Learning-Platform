import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const FindCoaching = async (userId: string) => {
  try {
    const coaching = await prisma.coachingCenter.findFirst({where: {userId: userId}})
    if (!coaching)
      throw new apiError(400, "Does not have any coaching page !!!");

    return coaching;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
