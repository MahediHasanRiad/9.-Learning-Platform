import { Batch } from "../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";

export const allBatchController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;

  page = Math.max(1, Number(page));
  limit = Math.max(1, Number(limit));

  // Build Filter Object for reuse
  const filter = {};
  if (search) {
    filter.CcName = { $regex: search, $options: "i" };
  }

  // Sort Stage Object
  const sortStage = {
    [sortBy]: sortType === "dec" ? -1 : 1,
  };

  // 1. Get total items for accurate pagination (Do this BEFORE or separately from aggregation)
  const totalItems = await Batch.countDocuments(filter);

  // 2. Main Aggregation
  const batch = await Batch.aggregate([
    { $match: filter },
    {
      $lookup: {
        from: "subjects",
        localField: "subjects",
        foreignField: "_id",
        as: "subjects",
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
    { $sort: sortStage },
    { $skip: (page - 1) * limit },
    { $limit: limit },
  ]);

  // Pagination & Links
  const pagination = await Pagination(page, limit, totalItems, "allBatches");
  const links = await Links(req, pagination, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});