import { apiError } from "../../../../utils/apiError.js";
import { prisma } from "../../../../lib/prisma.js";

interface CreateCoachingType {
  CcName: string;
  address: string;
  userId: string;
}

export const CreateCoaching = async ({
  userId,
  CcName,
  address,
}: CreateCoachingType) => {
  try {

    const coachingCenter = await prisma.coachingCenter.create({
      data: {
        CcName,
        address,
        userId: userId,
      },
    });

    return coachingCenter;
  } catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
