import mongoose from "mongoose";
import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { Batch } from "../../../../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";

export const createBatchController = asyncHandler(async (req, res) => {
  /**
   * get {name, subjectIds, scheduleId, capacity, price, assignedTeachersIds, recurringRule} = req.body
   * if(empty) return error
   * if(!subjectIds || !scheduleId || !teacherId) return error
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
    bio
  } = req.body;

  if (!name) throw new apiError('Name are required !!!')
  if (!subjects) throw new apiError('subjects are required !!!')
  if (!start_date) throw new apiError('Start_date are required !!!')
  if (!end_date) throw new apiError('End_date are required !!!')
  if (!capacity) throw new apiError('Capacity are required !!!')
  if (!price) throw new apiError('Price are required !!!')
  if (!assignedTeachers) throw new apiError('Assigned Teachers are required !!!')
  if (!recurringRule) throw new apiError('Recurring Rule are required !!!')



    const coverImageLocalFilePath = LocalFilePath(req, 'coverImage', true)
    const coverImage = coverImageLocalFilePath ? await cloudinaryFileUpload(coverImageLocalFilePath) : ''

    // find coaching by user
    const coaching = await CoachingCenter.findOne({userId: req.user._id})

  // create
  const batch = await Batch.create({
    name,
    coverImage: coverImage.url,
    subjects,
    start_date,
    end_date,
    capacity,
    price,
    assignedTeachers,
    recurringRule,
    bio,
    coachingId: coaching._id,
  });

  res.status(201).json(new apiResponse(201, batch));
});
