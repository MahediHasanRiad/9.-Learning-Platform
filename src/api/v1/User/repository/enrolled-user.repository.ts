import { prisma } from "../../../../lib/prisma.js";

interface EnrolledUserType {
  userId: string;
  sortType: string;
  page: number;
  limit: number;
}
export const EnrolledUser = async ({
  userId,
  sortType = "dec",
  page = 1,
  limit = 10,
}: EnrolledUserType) => {
  try {
    
    const skipPage = (page - 1) * limit

    const enrollment = await prisma.enrollment.findMany({
      where: { studentId: userId },
      include: {
        batch: true
      },
      orderBy: {
        createdAt: sortType as 'asc' | 'desc'
      },
      skip: skipPage,
      take: limit
    });

    return enrollment;
  } 
  catch (error) {
    console.log("Enrolled user", error);
  }
};
