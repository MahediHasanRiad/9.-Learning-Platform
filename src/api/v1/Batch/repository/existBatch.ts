import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const existBatch = async (id: string) => {
  try {
    const existBatch = await prisma.batch.findFirst({where: {id: id}})
    if (!existBatch) throw new apiError(404, "Batch id invalid !!!");

  } catch (error) {
    console.log(error);
  }
};
