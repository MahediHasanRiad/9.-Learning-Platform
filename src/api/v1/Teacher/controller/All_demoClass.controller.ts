import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { DemoClass } from "../../Demo/model/demoClass.model.js";
import { GetAllDemoClass } from "../repository/demo-class.repository.js";
import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";

interface DemoClassQueryType {
  page: string;
  limit: string;
  sortType: 'dec' | 'asc',
  sortBy: string;
  search: string
}

export const allDemoClassController = asyncHandler(async (req:Request, res: Response) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.query
   * filter by search
   * add link
   * pagination
   * links
   */

  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query as Partial<DemoClassQueryType>;

  page = Number(page);
  limit = Number(limit);

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  if(!req.user?._id) throw new apiError(400, 'Invalid Token !!!')
 
    // get all demo-classes
  const userId = req.user._id.toString();
  const demoClass = await GetAllDemoClass({ userId, sortKey, page, limit });

  // add link
  const DemoClasses = demoClass.map((demoClass) => ({
    ...demoClass,
    link: `/demoClasses/${demoClass._id}`,
  }));

  // pagination
  const totalItems = await DemoClass.countDocuments(demoClass);
  const pagination = Pagination(page, limit, totalItems, "demoClasses");

  // links
  const links = Links(req, pagination, page, "demoClasses");

  res
    .status(200)
    .json(new apiResponse(200, { DemoClasses, pagination, links }));
});
