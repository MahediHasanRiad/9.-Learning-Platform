import mongoose from "mongoose";
import { Enrollment } from "../../Enrollment/model/enrollment.model.js";

export const EnrolledUser = async ({userId, sortKey, page, limit}) => {
  try {
    const enrollment = await Enrollment.aggregate([
      {
        $match: {
          studentId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "batches",
          as: "batchId",
          localField: "batchId",
          foreignField: "_id",
        },
      },
    ])
      .sort(sortKey)
      .skip((page - 1) * limit)
      .limit(limit);

    return enrollment;

  } 
  catch (error) {
    console.log("Enrolled user", error);
  }
};
