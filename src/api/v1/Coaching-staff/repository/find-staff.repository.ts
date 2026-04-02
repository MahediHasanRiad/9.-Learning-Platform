import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const FindStaff = async (id: string) => {
  try {
    const staff = await prisma.coachingStaff.findFirst({
      where: { staffId: id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
        coaching: {
          select: {
            id: true,
            CcName: true
          }
        }
      }
    });
    if (!staff) throw new apiError(400, "coaching staff not found !!!");

    return staff;
  } 
  catch (error: any) {
    if (error instanceof Error) throw Error;
    new apiError(500, error.message);
  }
};
