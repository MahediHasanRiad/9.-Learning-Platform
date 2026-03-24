import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { InputData } from "../validation/input-data.validation.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { CreateBatch } from "../repository/create-batch.repository.js";
import { apiError } from "../../../../utils/apiError.js";
import type { BatchType } from "../batch-type.js";

export const createBatchController = asyncHandler(async (req, res) => {
  /**
   * get {name, subjectIds, scheduleId, capacity, price, assignedTeachersIds, recurringRule} = req.body
   * if(empty) return error
   * if(!subjectIds || !scheduleId ) return error
   * create
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
    bio,
  } = req.body as Required<BatchType> ;

  const id = req.user?._id?.toString();
  if(!id) throw new apiError(400, 'param id not found !!!')

  // check input data
  await InputData({
    name,
    subjects,
    start_date,
    end_date,
    capacity,
    price,
    assignedTeachers,
    recurringRule,
  });

  // cover-image
  const coverImageLocalFilePath = LocalFilePath(req, "coverImage", true);
  const coverImage = coverImageLocalFilePath
    ? await cloudinaryFileUpload(coverImageLocalFilePath)
    : "";

  // find coaching by user
  const coaching = await FindCoaching(id);
  const coachingId = coaching?._id?.toString()

  // create
  const batch = await CreateBatch({
    name,
    coverImage,
    subjects,
    start_date,
    end_date,
    capacity,
    price,
    assignedTeachers,
    recurringRule,
    bio,
    coachingId: coachingId,
  });

  res.status(201).json(new apiResponse(201, batch));
});
