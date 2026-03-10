import mongoose from "mongoose";
import { Batch } from "../../../../model/batch.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const allBatchController = asyncHandler(async (req, res) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.query
   * find all batch in this coaching center
   * filter by search
   * add link in every batch {teacher, batch}
   * pagination
   * links
   * res
   */

  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  const coaching = await CoachingCenter.findOne({userId: req.user._id})
  if(!coaching) throw new apiError('Does not hava any Coaching Page !!!')

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const batch = await Batch.aggregate([
    {
      $match: {
        coachingId: new mongoose.Types.ObjectId(coaching._id),
      },
    },
    {
      $match: {
        name: {$regex: search, $options: 'i'}
      }
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
        subjects: {
          $map: {
            input: "$subjects",
            as: "subject",
            in: {
              _id: "$$subject._id",
              name: "$$subject.name",
            },
          },
        },
        assignedTeachers: {
          $map: {
            input: "$assignedTeachers",
            as: "teacher",
            in: {
              _id: "$$teacher._id",
              userId: "$$teacher.userId",
              education: "$$teacher.education",
              experience: "$$teacher.experienceOfYears",
              rating: "$$teacher.rating",
              self: {
                $concat: ["/teachers/", { $toString: "$$teacher._id" }],
              },
            },
          },
        },
        Batch_link: {
          $concat: ["/batches/", {$toString: "$_id"}]
        },
      },
    },
  ])
    .sort(sortKey)
    .skip((page - 1) * limit)
    .limit(limit);
console.log(batch)
  // pagination
  const totalItems = await Batch.countDocuments(batch);
  const pagination = await Pagination(page, limit, totalItems, "allBatches");

  // links
  const links = await Links(req, pagination, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});
