import mongoose from "mongoose";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Enrollment } from "../../Enrollment/model/enrollment.model.js";
import { EnrolledUser } from "../repository/enrolled-user.repository.js";

export const allEnrolledController = asyncHandler(async (req, res) => {
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
  
  // get all enrolled user
  const userId = req.user._id
  const enrollment = await EnrolledUser({userId, sortKey, page, limit})
   

  // add batch link
  const enrolled_Batch = enrollment.map((batch) => ({
    ...batch,
    self: `/batches/${batch.batchId[0]._id}`,
  }));

  // pagination
  const totalItems = await Enrollment.countDocuments(enrollment);
  const pagination = await Pagination(
    page,
    limit,
    totalItems,
    "user/enrollments",
  );

  // links
  const links = await Links(req, pagination, "user/enrollments");

  res
    .status(200)
    .json(new apiResponse(200, { enrolled_Batch, pagination, links }));
});
