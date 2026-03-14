import mongoose from "mongoose";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Links } from "../../../../utils/links.js";
import { apiError } from "../../../../utils/apiError.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { FilterStaffBySearch } from "../repository/filter-staff-by-search.repository.js";

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
  page = Math.max(1, Number(page || 1));
  limit = Math.max(1, Number(limit || 10));

  const userId = req.user._id;

  // find coaching by user id
  const coaching = await FindCoaching({ userId });

  // filter by search
  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
  const filterByCoaching = await FilterStaffBySearch({coachingId: coaching?._id, role, search, sortKey, page, limit})

  // add indivisual link
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
