import { Batch } from "../model/batch.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const getAllBatchByUser = () => asyncHandler(async(req, res) => {
  const batch = await Batch.find({})
})