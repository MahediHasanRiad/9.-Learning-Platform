import { apiError } from "../../../../utils/apiError.js";
import { DemoClass } from "../../Demo/model/demoClass.model.js";
import { prisma } from "../../../../lib/prisma.js";

interface DemoClass {
  userId: string;
  sortType: string;
  page: number;
  limit: number;
}

export const GetAllDemoClass = async ({
  userId,
  sortType,
  page,
  limit,
}: DemoClass) => {
  try {

    const skipPage = (page - 1) * limit

    const demoClass = await prisma.demoClass.findMany({
      where: { AND: [{ userId: userId }, { batchId: "" }] },
      orderBy: {
        createdAt: sortType as 'desc' | 'asc'
      },
      skip: skipPage,
      take: limit
    });

    return demoClass;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
