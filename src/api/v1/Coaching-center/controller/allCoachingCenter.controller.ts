import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import type { Request, Response } from "express";
import type { QueryType } from "../coaching-type.js";

export const listOfAllCoachingCenterController = asyncHandler(
  async (req: Request, res: Response) => {
    /**
     * get {page, limit, sortType, sortBy, search} = req.query
     * filter by search
     * add link for every coaching profile
     * add pagination
     * add links
     * res
     */

    let {
      page = 1,
      limit = 10,
      sortType = "dec",
      sortBy = "updatedAt",
      search = "",
    } = req.query as Partial<QueryType>;
    
    page = Number(page)
    limit = Number(limit)

    const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

    // find coaching based on search
    const filterCoachingCenter = await FindCoaching({search, sortKey, page, limit})
    
    // add link for every coaching center
    const coachingCenter = filterCoachingCenter.map((coaching) => ({
      ...coaching,
      link: `${req.path}/${coaching._id}`,
    }));

    // pagination
    const totalItems =
      await CoachingCenter.countDocuments(filterCoachingCenter);
    const pagination = await Pagination(
      page,
      limit,
      totalItems,
      "coachingCenters",
    );

    // links
    const links = await Links(req, pagination, page, "coachingCenters");

    res
      .status(200)
      .json(new apiResponse(200, { coachingCenter, pagination, links }));
  },
);
