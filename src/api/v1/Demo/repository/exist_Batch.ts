import { apiError } from "../../../../utils/apiError.js";
import { prisma } from "../../../../lib/prisma.js";

export const existBatch = async (batchId: string) => {
  try {
    if (!batchId) return;

    const batch = await prisma.batch.findFirst({where: {id: batchId}})
    if (!batch) throw new apiError(400, "Batch not found !!!");

  } 
  catch (error: any) {
    console.log(error)
    new apiError(400, error.message);
  }
};
