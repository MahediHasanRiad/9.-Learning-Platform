import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface FindCoachingType {
  search: string;
  sortType: 'desc' | 'asc';
  page: number;
  limit: number;
}

export const FindCoaching = async ({
  search,
  sortType,
  page = 1,
  limit = 10,
}: Partial<FindCoachingType>) => {
  try {

    const skipPage = (page - 1) * limit

    const filterCoachingCenter = await prisma.coachingCenter.findMany({
      where: { CcName: { contains: search ?? "", mode: "insensitive" } },
      orderBy: {
        createdAt: sortType as 'desc' | 'asc'
      },
      skip: skipPage,
      take: limit
    });

    return filterCoachingCenter;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
