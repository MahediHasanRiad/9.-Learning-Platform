import { apiError } from "../../../../utils/apiError.js";
import type { FilterBySearchType } from "../batch-type.js";
import { prisma } from "../../../../lib/prisma.js";

export const FilterBatchOnCoaching = async ({
  search = "",
  coachingId,
  sortType,
  page = 1,
  limit = 10,
}: FilterBySearchType) => {
  try {

    const skipPage = (page - 1) * limit

    const batch = await prisma.batch.findMany({
      where: { 
        coachingId: coachingId,
        name: {
          contains: search, mode: "insensitive"
        }
      },
      orderBy: {
        createdAt: sortType as "desc" | "asc"
      },
      skip: skipPage,
      take: limit
      
    });
    return batch;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
