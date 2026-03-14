import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { CoachingStaff } from "../model/CoachingStaff.model.js";

export const FilterStaffBySearch = async ({coachingId, role, search, sortKey, page, limit}) => {
  try {
    const filterByCoaching = await CoachingStaff.aggregate([
        {
          $match: {
            coachingId: new mongoose.Types.ObjectId(coachingId),
            role: { $regex: role || "", $options: "i" },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "staffId",
            foreignField: "_id",
            as: "staffDetails",
          },
        },
        { $unwind: "$staffDetails" },
        {
          $match: {
            "staffDetails.name": { $regex: search || "", $options: "i" },
          },
        },
        {
          $lookup: {
            from: "coachingcenters",
            localField: "coachingId",
            foreignField: "_id",
            as: "coachingInfo",
          },
        },
        { $unwind: "$coachingInfo" },
        {
          $project: {
            _id: 1,
            role: 1,
            userId: "$staffDetails._id",
            name: "$staffDetails.name",
            avatar: "$staffDetails.avatar",
            coachingId: "$coachingInfo._id",
            CcName: "$coachingInfo.CcName",
          },
        },
      ])
        .sort(sortKey)
        .skip((page - 1) * limit)
        .limit(limit);

    return filterByCoaching
  } 
  catch (error) {
    if(error instanceof Error) throw Error
    new apiError(500, error.message)
  }
}