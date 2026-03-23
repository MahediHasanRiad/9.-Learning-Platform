import mongoose, { Types } from "mongoose";
import { Enrollment } from "../../Enrollment/model/enrollment.model.js";

interface EnrolledUserType {
  userId: Types.ObjectId;
  sortKey: string;
  page: number;
  limit: number
}
export const EnrolledUser = async ({userId, sortKey = 'dec', page = 1, limit = 10}: EnrolledUserType) => {

  try {
    const enrollment = await Enrollment.aggregate([
      {
        $match: {
          studentId: userId,
        },
      },
      // {
      //   $lookup: {
      //     from: "batches",
      //     localField: "batchId",
      //     foreignField: "_id",
      //     as: "batch",
      //   },
      // },
      // {
      //   $unwind: "$batch"
      // }
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
