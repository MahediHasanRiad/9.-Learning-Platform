import { apiError } from "../../../../utils/apiError.js"
import { prisma } from "../../../../lib/prisma.js";

export const FindSingleBatch = async (id: string) => {
  try {
    
    const batch = await prisma.batch.findFirst({where: {id: id}})

    return batch
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}