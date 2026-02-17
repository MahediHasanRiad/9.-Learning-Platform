import { Batch } from "../../../../model/batch.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const existBatch = async (batchId) => {
  try {
    if (!batchId) return;

    const batch = await Batch.findById(batchId);
    if (!batch) throw new apiError(400, "Batch not found !!!");

  } 
  catch (error) {
    new apiError(400, error.message);
  }
};
