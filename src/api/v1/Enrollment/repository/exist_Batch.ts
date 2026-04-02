import { prisma } from "../../../../lib/prisma.js"
import { apiError } from "../../../../utils/apiError.js"

export const existBatch = async (batchId: string) => {
  try {
    const batch = await prisma.batch.findFirst({where: {id: batchId}})
    if(!batch) throw new apiError(404, 'Batch not found !!!')
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}