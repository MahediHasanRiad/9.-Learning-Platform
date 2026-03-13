import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { DemoClass } from "../../Demo/model/demoClass.model.js";
import { GetAllDemoClass } from "../repository/demo-class.repository.js";

export const allDemoClassController = asyncHandler(async (req, res) => {
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
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  // get all demo-classes
  const userId = req.user._id;
  const demoClass = await GetAllDemoClass({ userId, sortKey, page, limit });

  // add link
  const DemoClasses = demoClass.map((demoClass) => ({
    ...demoClass._doc,
    link: `/demoClasses/${demoClass._id}`,
  }));

  // pagination
  const totalItems = await DemoClass.countDocuments(demoClass);
  const pagination = await Pagination(page, limit, totalItems, "demoClasses");

  // links
  const links = await Links(req, pagination, "demoClasses");

  res
    .status(200)
    .json(new apiResponse(200, { DemoClasses, pagination, links }));
});
