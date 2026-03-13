import { CoachingCenter } from "../model/CoachingCenter.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";

export const listOfAllCoachingCenterController = asyncHandler(
  async (req, res) => {
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
    } = req.query;
    
    page = Math.max(1, Number(page || 1));
    limit = Math.max(1, Number(limit || 10));

    const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

    // find coaching based on search
    const filterCoachingCenter = await FindCoaching({search, sortKey, page, limit})
    
    // add link for every coaching center
    const coachingCenter = filterCoachingCenter.map((coaching) => ({
      ...coaching._doc,
      link: `${req.path}/${coaching.id}`,
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
    const links = await Links(req, pagination, "coachingCenters");

    res
      .status(200)
      .json(new apiResponse(200, { coachingCenter, pagination, links }));
  },
);
