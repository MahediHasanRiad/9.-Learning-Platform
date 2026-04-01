import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";
import type { CoachingType } from "../coaching-type.js";

interface update {
  id: string;
  updatedData: Partial<CoachingType>;
}

export const UpdateData = async ({ id, updatedData }: update) => {
  try {
    const coaching = await prisma.coachingCenter.update({
      where: { id: id },
      data: updatedData,
    });
    return coaching;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
