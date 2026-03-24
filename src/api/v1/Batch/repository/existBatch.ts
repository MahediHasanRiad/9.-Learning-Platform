import { apiError } from "../../../../utils/apiError.js";
import { Batch } from "../model/batch.model.js";

export const existBatch = async (id: string) => {
  try {
    const existBatch = await Batch.findById(id);
    if (!existBatch) throw new apiError(404, "Batch id invalid !!!");

  } catch (error) {
    console.log(error);
  }
};
