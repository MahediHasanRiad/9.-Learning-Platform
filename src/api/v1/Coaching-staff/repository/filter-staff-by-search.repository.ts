import { apiError } from "../../../../utils/apiError.js";
import type { FilterStaffBySearchType } from "../coaching-staff-type.js";
import { prisma } from "../../../../lib/prisma.js";


export const FilterStaffBySearch = async ({
  coachingId,
  role,
  search,
  sortType = "desc",
  page = 1,
  limit = 10,
}: Partial<FilterStaffBySearchType>) => {
  try {

    const skipPage = (page - 1) * limit

    const filterByCoaching = await prisma.coachingStaff.findMany({
      where: { 
        coachingId: coachingId!,
      },
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
      },
      orderBy: {
        createdAt: sortType as "desc" | "asc"
      },
      skip: skipPage,
      take: limit
    });

    return filterByCoaching;
  } catch (error: any) {
    console.log(error);
    if (error instanceof Error) throw Error;
    new apiError(500, error.message);
  }
};
