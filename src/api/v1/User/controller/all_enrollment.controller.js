import mongoose from "mongoose";
import { Enrollment } from "../../../../model/enrollment.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const allEnrollmentController = asyncHandler(async (req, res) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.query
   * get find by req.user._id
   * add link {bath, teacher}
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
  ((page = Number(page)), (limit = Number(limit)));

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const enrollment = await Enrollment.aggregate([
    {
      $match: {
        studentId: new mongoose.Types.ObjectId(req.user._id),
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


  // add batch link
  const enrolled_Batch = enrollment.map((batch) => ({
    // console.log('b', batch)
    ...batch,
    self: `/batches/${batch.batchId[0]._id}`
  }));

  // pagination
  const totalItems = await Enrollment.countDocuments(enrollment);
  const pagination = await Pagination(page, limit, totalItems, "user/enrollments");

  // links
  const links = await Links(req, pagination, "user/enrollments");

  res
    .status(200)
    .json(new apiResponse(200, { enrolled_Batch, pagination, links }));
});
