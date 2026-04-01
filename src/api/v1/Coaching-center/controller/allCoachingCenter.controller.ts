import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import type { Request, Response } from "express";
import type { QueryType } from "../coaching-type.js";
import { prisma } from "../../../../lib/prisma.js";

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
      sortType = "desc",
      search = "",
    } = req.query as Partial<QueryType>;
    
    page = Number(page)
    limit = Number(limit)

    // find coaching based on search
    const filterCoachingCenter = await FindCoaching({search, sortType, page, limit})
    
    // add link for every coaching center
    const coachingCenter = filterCoachingCenter.map((coaching) => ({
      ...coaching,
      link: `${req.path}/${coaching.id}`,
    }));

    // pagination
    const totalItems = await prisma.coachingCenter.count({where: {CcName: {contains: search, mode: "insensitive"}}});
    const pagination = Pagination(
      page,
      limit,
      totalItems,
      "coachingCenters",
    );

    // links
    const links = Links(req, pagination, page, "coachingCenters");

    res
      .status(200)
      .json(new apiResponse(200, { coachingCenter, pagination, links }));
  },
);
