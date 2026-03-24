import type { Request, Response } from "express";
import { Enrollment } from "../model/enrollment.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existBatch } from "../repository/exist_Batch.js";

export const createEnrollmentController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get {batchId} = req.body
   * if(!batchId) return error
   * if(!exist batch) return error
   * create
   * res
   */

  const userId = req.user?._id;
  if(!userId) throw new apiError(400, 'invalid token !!!')

  const { batchId } = req.body;
  if (!batchId) throw new apiError(400, "batchId required !!!");

  // check exist batch or not
  await existBatch(batchId);

  // create
  const enrollment = await Enrollment.create({studentId: userId, batchId});

  res.status(201).json(new apiResponse(201, enrollment));
});
