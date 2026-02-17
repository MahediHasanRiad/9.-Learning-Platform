import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existTeachers } from "../utils/existTeachers.js";
import { existSubjects } from "../utils/existSubjects.js";
import { batchUpdateInDB } from "../utils/batchUpdate.js";
import { existBatch } from "../utils/existBatch.js";


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
    recurringRule,
  } = req.body;
  
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id))
    throw new apiError(400, "batch id not found !!!");

  // exist batch
  await existBatch(id)

  // update data
  const updateData = {};

  // exist teacher && update data
  await existTeachers(assignedTeachers, updateData);

  // exist subjects && update data
  await existSubjects(subjects, updateData);

  // update data
  if (name !== undefined) updateData.name = name;
  if (start_date !== undefined) updateData.start_date = start_date;
  if (end_date !== undefined) updateData.end_date = end_date;
  if (capacity !== undefined) updateData.capacity = capacity;
  if (price !== undefined) updateData.price = price;
  if (recurringRule !== undefined) updateData.recurringRule = recurringRule;

  // update
  const batch = await batchUpdateInDB(updateData, id);

  res.status(200).json(new apiResponse(200, batch));
});
