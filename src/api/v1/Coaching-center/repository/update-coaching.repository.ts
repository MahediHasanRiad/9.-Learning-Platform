import { prisma } from "../../../../lib/prisma.js";
import type { Prisma } from "../../../../prisma/client.js";
import { apiError } from "../../../../utils/apiError.js";
import type { updateType } from "../coaching-type.js";

interface update {
  id?: string;
  updatedData: updateType;
}

export const UpdateData = async ({ id, updatedData }: update) => {
  try {
    const coaching = await prisma.coachingCenter.update({
      where: { id: id!},
      data: updatedData as Prisma.CoachingCenterUpdateInput
    });
    return coaching;
  } 
  catch (error: any) {
    throw new apiError(
      400,
      error?.meta?.cause || error?.message || "Something went wrong",
    );
  }
};
