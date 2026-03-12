import mongoose from "mongoose";
import { Batch } from "../../../../model/batch.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const batchListByCoachingIdController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  // find coaching
  const coaching = await CoachingCenter.findOne({ userId: req.user._id });
  if (!coaching) throw new apiError("Does not hava any Coaching Page !!!");

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const batch = await Batch.aggregate([
    {
      $match: {
        coachingId: new mongoose.Types.ObjectId(coaching._id),
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
  console.log(batch);
  // pagination
  const totalItems = await Batch.countDocuments(batch);
  const pagination = await Pagination(page, limit, totalItems, "allBatches");

  // links
  const links = await Links(req, pagination, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});
