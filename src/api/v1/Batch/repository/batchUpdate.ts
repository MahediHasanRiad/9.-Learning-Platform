import { prisma } from "../../../../lib/prisma.js";
import type { UpdateBatchType } from "../batch-type.js";

export const BatchUpdate = async (
  updateData: Partial<UpdateBatchType>,
  id: string,
) => {
  try {

    const batch = await prisma.batch.update({
      where: { id: id },
      data: updateData as any,
    });
    return batch;
  } 
  catch (error) {
    console.log(error);
  }
};
