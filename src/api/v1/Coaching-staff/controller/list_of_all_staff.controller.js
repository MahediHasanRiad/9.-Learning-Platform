import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import mongoose from "mongoose";
import { Links } from "../../../../utils/links.js";

export const allCoachingStaffController = asyncHandler(async (req, res) => {
  /**
   * get {id} = req.params (coaching center id)
   * get {page, limit, sortType, sortBy, search} = req.query
   * filter by coaching-center-name
   * add link in every coaching center {self, teacher}
   * add pagination
   * add links {self, next, prev}
   * res
   */

  const { id } = req.params;
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  // filter by search
  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const filterByCoaching = await CoachingStaff.aggregate([
    {
      $match: {
        coachingId: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "users",
        as: "staffId",
        localField: "staffId",
        foreignField: "_id",
      },
    },
    { $unwind: "$staffId" },

    {
      $match: {
        $or: [
          { "staffId.name": { $regex: search || "", $options: "i" } },
          { role: { $regex: search || "", $options: "i" } },
        ],
      },
    },
  ])
    .sort(sortKey)
    .skip((page - 1) * limit)
    .limit(limit);

  const staff = filterByCoaching.map((item) => ({
    ...item,
    staffLink: `/users/${item.staffId._id}`,
  }));

  // pagination
  const totalItems = await CoachingStaff.countDocuments(filterByCoaching);
  const pagination = await Pagination(
    page,
    limit,
    totalItems,
    `coachingStaffs/${id}`,
  );

  // links
  const links = await Links(req, pagination, `coachingStaffs/${id}`);

  res.status(200).json(new apiResponse(200, { staff, pagination, links }));
});
