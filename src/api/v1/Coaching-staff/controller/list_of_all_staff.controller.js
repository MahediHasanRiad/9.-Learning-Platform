import mongoose from "mongoose";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Links } from "../../../../utils/links.js";
import { apiError } from "../../../../utils/apiError.js";

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

  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
    role = "",
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  // find coaching by user id
  const coaching = await CoachingCenter.findOne({ userId: req.user._id });
  if (!coaching) throw new apiError("Does not have any Coaching Page");

  // filter by search
  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const filterByCoaching = await CoachingStaff.aggregate([
    {
      $match: {
        coachingId: new mongoose.Types.ObjectId(coaching._id),
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

  const staff = filterByCoaching.map((item) => ({
    ...item,
    staffLink: `/users/${item._id}`,
  }));

  // pagination
  const totalItems = await CoachingStaff.countDocuments(filterByCoaching);
  const pagination = await Pagination(
    page,
    limit,
    totalItems,
    `coachingStaffs`,
  );

  // links
  const links = await Links(req, pagination, `coachingStaffs`);

  res.status(200).json(new apiResponse(200, { staff, pagination, links }));
});
