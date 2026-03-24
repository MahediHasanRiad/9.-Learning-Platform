import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Links } from "../../../../utils/links.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { FilterStaffBySearch } from "../repository/filter-staff-by-search.repository.js";
import type { Request, Response } from "express";
import type { QueryType } from "../coaching-staff-type.js";
import { apiError } from "../../../../utils/apiError.js";

export const allCoachingStaffController = asyncHandler(async (req: Request, res: Response) => {
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
    role = "Teacher",
  } = req.query as Partial<QueryType>;

  page = Math.max(1, Number(page || 1));
  limit = Math.max(1, Number(limit || 10));

  const userId = req.user?._id?.toString();
  if(!userId) throw new apiError(400, 'invalid token !!!')

  // find coaching by user id
  const coaching = await FindCoaching( userId );
  if(!coaching) throw new apiError(404, 'Coaching center not found !!!')

  // filter by search
  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  const coachingId = coaching._id?.toString()
  const filterByCoaching = await FilterStaffBySearch({coachingId, role, search, sortKey, page, limit})

  // add indivisual link
  const staff = filterByCoaching?.map((item) => ({
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
  const links = await Links(req, pagination, page, `coachingStaffs`);

  res.status(200).json(new apiResponse(200, { staff, pagination, links }));
});
