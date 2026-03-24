import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindSingleBatch } from "../repository/find-batch-by-id.repository.js";

export const findSingleBatchController = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  if (!id) throw new apiError(400, "batch id not found !!!");

  // find batch by id
  const batch = await FindSingleBatch(id)

  res.status(200).json(new apiResponse(200, { batch }));
});
