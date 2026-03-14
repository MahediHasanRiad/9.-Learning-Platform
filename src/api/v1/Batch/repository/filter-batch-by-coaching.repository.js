import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { Batch } from "../model/batch.model.js";

export const FilterBatchOnCoaching = async ({search, coachingId, sortKey, page, limit}) => {
  try {
     const batch = await Batch.aggregate([
         {
           $match: {
             coachingId: new mongoose.Types.ObjectId(coachingId),
           },
         },
         {
           $match: {
             name: { $regex: search, $options: "i" },
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
             let: { teacherIds: "$assignedTeachers" },
             pipeline: [
               { $match: { $expr: { $in: ["$_id", "$$teacherIds"] } } },
               {
                 $lookup: {
                   from: "users",
                   localField: "userId",
                   foreignField: "_id",
                   as: "user",
                 },
               },
               { $unwind: "$user" },
               {
                 $project: {
                   _id: 1,
                   name: "$user.name",
                   avatar: "$user.avatar",
                 },
               },
             ],
             as: "assignedTeachers",
           },
         },
       ])
         .sort(sortKey)
         .skip((page - 1) * limit)
         .limit(limit);

      return batch
  } catch (error) {
    throw new apiError(400, error.message)
  }
}