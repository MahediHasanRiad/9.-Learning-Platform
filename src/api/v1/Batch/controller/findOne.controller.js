import mongoose from "mongoose";
import { Batch } from "../model/batch.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindSingleBatch } from "../repository/find-batch-by-id.repository.js";

export const findSingleBatchController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) throw new apiError(400, "batch id not found !!!");

  // find batch by id
  const batch = await FindSingleBatch(id)

  res.status(200).json(new apiResponse(200, { batch }));
});
