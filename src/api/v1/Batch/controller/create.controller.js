import mongoose from "mongoose";
import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { Batch } from "../../../../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

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
  } = req.body;

  if (
    !name ||
    !subjects ||
    !start_date ||
    !end_date ||
    !capacity ||
    !price ||
    !assignedTeachers ||
    !recurringRule
  )
    throw new apiError(400, "all field are required !!!");

  // exist subject
  const subject = await Subject.find({
    _id: {
      $in: subjects.map((id) => new mongoose.Types.ObjectId(id)),
    },
  });
  if (subjects.length !== subject.length)
    throw new apiError(400, "one or more subject id invalid !!!");

  // exist teacher
  const teacher = await Teacher.find({
    _id: {
      $in: assignedTeachers.map((id) => new mongoose.Types.ObjectId(id)),
    },
  });
  if (assignedTeachers.length !== teacher.length)
    throw new apiError(400, "one or more teacher id invalid !!!");

  // create
  const batch = await Batch.create({
    name,
    subjects,
    start_date,
    end_date,
    capacity,
    price,
    assignedTeachers,
    recurringRule,
    CcName: req.user._id
  });

  res.status(201).json(new apiResponse(201, batch));
});
