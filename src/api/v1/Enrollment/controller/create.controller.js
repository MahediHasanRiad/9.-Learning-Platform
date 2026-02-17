import { Enrollment } from "../../../../model/enrollment.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existBatch } from "../utils/exist_Batch.js";

export const createEnrollmentController = asyncHandler(async (req, res) => {
  /**
   * get {batchId} = req.body
   * if(!batchId) return error
   * if(!exist batch) return error
   * create
   * res
   */

  const { batchId } = req.body;
  if (!batchId) throw new apiError(400, "batchId required !!!");

  // check exist batch or not
  await existBatch(batchId);

  // create
  const enrollment = await Enrollment.create({
    studentId: req.user._id,
    batchId,
  });

  res.status(201).json(new apiResponse(201, enrollment));
});
