import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const FindCoaching = async (id: string) => {
  try {
    const coaching = await prisma.coachingCenter.findFirst({where: {userId: id}});
    if (!coaching) throw new apiError(404, "Coaching Center not found !!!");

    return coaching;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
