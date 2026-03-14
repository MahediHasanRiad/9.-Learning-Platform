import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { Batch } from "../model/batch.model.js";

export const FindSingleBatch = async (id) => {
  try {
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
            from: "users",
            as: "assignedTeachers",
            localField: "assignedTeachers",
            foreignField: "_id",
          },
        },
        {
          // $project এর বদলে $addFields
          // যাতে বর্তমান ডাটা হারিয়ে না যায়
          $addFields: {
            subjects: {
              $map: {
                input: "$subjects",
                as: "sub",
                in: {
                  _id: "$$sub._id",
                  name: "$$sub.name",
                  className: "$$sub.className",
                },
              },
            },
            assignedTeachers: {
              $map: {
                input: "$assignedTeachers",
                as: "teacher",
                in: {
                  _id: "$$teacher._id",
                  name: "$$teacher.name",
                  avatar: "$$teacher.avatar",
                },
              },
            },
          },
        },
      ]);

    return batch
  } 
  catch (error) {
    throw new apiError(400, error.message)
  }
}