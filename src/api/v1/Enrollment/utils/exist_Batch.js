import { Batch } from "../../../../model/batch.model.js"
import { apiError } from "../../../../utils/apiError.js"

export const existBatch = async (batchId) => {
  try {
    const batch = await Batch.findById(batchId)
    if(!batch) throw new apiError(404, 'Batch not found !!!')
  } 
  catch (error) {
    throw new apiError(400, error.message)
  }
}