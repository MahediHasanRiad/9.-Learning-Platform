import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface GetAllTeacher {
  search: string;
  sortType: "desc" | "asc";
  page: number;
  limit: number;
}

export const FindTeacherOnSearch = async ({
  search,
  sortType,
  page,
  limit,
}: GetAllTeacher) => {
  try {

    const skipPage = (page - 1) * 1

    const filterSearch = await prisma.teacher.findMany({
      where: { user: { name: { contains: search, mode: "insensitive" } } },
      include: {user: true},
      orderBy: {
        createdAt: sortType as "desc" | "asc",
      },
      skip: skipPage,
      take: limit,

    });
    return filterSearch;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
