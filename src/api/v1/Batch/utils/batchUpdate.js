import { Batch } from "../../../../model/batch.model.js";

export const batchUpdateInDB = async (updateData, id) => {
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