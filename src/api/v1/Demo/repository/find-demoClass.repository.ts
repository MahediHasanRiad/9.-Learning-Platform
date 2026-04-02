import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const FindDemoClass = async (id: string) => {
  try {

    const demoClass = await prisma.demoClass.findFirst({where: {id: id}})
    if (!demoClass) throw new apiError(400, "demo class not found !!!");

    return demoClass;
  } 
  catch (error: any) {
    throw new apiError(400, error.message);
  }
};
