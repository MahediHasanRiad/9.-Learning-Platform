import type { UpdateBatchType } from "../batch-type.js";
import { Batch } from "../model/batch.model.js";


export const BatchUpdate = async (updateData: Partial<UpdateBatchType>, id: string) => {
  try {
    const batch = await Batch.findByIdAndUpdate(
        id,
        {
          $set: updateData,
        },
        { new: true },
      );

      return batch

  } catch (error) {
    console.log(error)
  }
}