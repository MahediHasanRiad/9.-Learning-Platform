import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { InputData } from "../validation/input-data.validation.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { CreateBatch } from "../repository/create-batch.repository.js";

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
  } = req.body;

  const id = req.user._id;

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
    coachingId: coaching?._id,
  });

  res.status(201).json(new apiResponse(201, batch));
});
