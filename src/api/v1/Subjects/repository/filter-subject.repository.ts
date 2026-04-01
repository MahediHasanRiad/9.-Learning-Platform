import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface FilterType {
  search: string;
  sortType: string;
  page: number;
  limit: number;
}

export const FilterSubject = async ({
  search,
  sortType = "desc",
  page = 1,
  limit = 10,
}: Partial<FilterType>) => {
  try {
    const skipPage = (page - 1) * limit;
    const filterSubjects = await prisma.subject.findMany({
      where: {
        name: { contains: search ? search : "", mode: "insensitive" },
      },
      orderBy: {
        createdAt: sortType as "desc" | "asc",
      },
      skip: skipPage,
      take: limit,
    });
    return filterSubjects;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
