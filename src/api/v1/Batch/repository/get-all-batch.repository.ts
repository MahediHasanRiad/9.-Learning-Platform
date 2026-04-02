import { prisma } from "../../../../lib/prisma.js";

export interface QueryType {
  page: number;
  limit: number;
  sortType: "asc" | "desc";
  search: string;
}

export const GetAllBatch = async ({page = 1, limit = 10, sortType = "desc", search}: Partial<QueryType>) => {
  try {
    const skipPage = (page - 1) * limit
    const getAllBatch = await prisma.batch.findMany({
      where: { name: { contains: search ?? '', mode: "insensitive" } },
      orderBy: {
        createdAt: sortType as "desc" | "asc"
      },
      skip: skipPage,
      take: limit
    });

    return getAllBatch

  } catch (error) {
    console.log(error)
  }
}