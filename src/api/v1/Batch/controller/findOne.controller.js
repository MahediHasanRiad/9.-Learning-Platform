import mongoose from "mongoose";
import { Batch } from "../../../../model/batch.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const findSingleBatchController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) throw new apiError(400, "batch id not found !!!");


  const batch = await Batch.aggregate([
  {
    $match: {
      _id: new mongoose.Types.ObjectId(id),
    },
  },
  {
    $lookup: {
      from: "subjects",     
      as: "subjects",
      localField: "subjects",
      foreignField: "_id",
    },
  },
  {
    $lookup: {
      from: "teachers",
      as: "assignedTeachers",
      localField: "assignedTeachers",
      foreignField: "_id",
    },
  },
  {
    $addFields: {
      assignedTeachers: {
        $map: {
          input: "$assignedTeachers",
          as: "teacher",
          in: {
            name: "$$teacher.teacherName",    // select only name
            education: "$$teacher.education",
            experienceOfYears: "$$teacher.experienceOfYears",
            self: {
              $concat: ["/teachers/", { $toString: "$$teacher._id" }],
            },
          },
        },
      },
      subjects: {
        $map: {
          input: "$subjects",
          as: "subject",
          in: {
            name: "$$subject.name", // select only name
          },
        },
      },
    },
  },
]);


  res.status(200).json(new apiResponse(200, { batch }));
});
