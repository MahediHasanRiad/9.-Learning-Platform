import { prisma } from "../../../../lib/prisma.js";
import { User } from "../model/user.model.js";

interface FindUserType {
  id: string;
  search: string;
  sortType: string;
  page: number;
  limit: number;
}

export const FindUserBasedOnSearch = async ({
  id,
  search,
  sortType = "desc",
  page = 1,
  limit = 10,
}: Partial<FindUserType>) => {
  try {

    const skipPage = (page - 1) * limit

    const filterUser = await prisma.user.findMany({
      where: { name: { contains: search ? search : '', mode: "insensitive" } },
      orderBy: {
        createdAt: sortType as "asc" | "desc"
      },
      skip: skipPage,
      take: limit
    });

    return filterUser;
  } catch (error) {
    console.log("Find User based on search", error);
  }
};
