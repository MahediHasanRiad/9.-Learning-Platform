import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { BatchUpdate } from "../repository/batchUpdate.js";
import { existBatch } from "../repository/existBatch.js";
import { VerifyInputForUpdate } from "../validation/varify-input-data-for-update.validattion.js";

export const updateBatchController = asyncHandler(async (req, res) => {
  /**
   * get {id} = req.params
   * if(!batch) retrun error
   * update batch info {name, subjects, start, end, capacity, price, assignedTeacher, recurringRule}
   * res
   */

  const {
    name,
    subjects,
    start_date,
    end_date,
    capacity,
    price,
    assignedTeachers,
    bio,
    recurringRule,
  } = req.body;

  const { id } = req.params;
  
  if (!id || !mongoose.Types.ObjectId.isValid(id))
    throw new apiError(400, "batch id not found !!!");

  // exist batch
  await existBatch(id);

  // update data varify
  const updateData = await VerifyInputForUpdate({
    name,
    start_date,
    end_date,
    capacity,
    price,
    recurringRule,
    assignedTeachers,
    subjects,
    bio,
  });

  // update
  const batch = await BatchUpdate(updateData, id);

  res.status(200).json(new apiResponse(200, batch));
});
