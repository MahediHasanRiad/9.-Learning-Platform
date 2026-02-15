import { Teacher } from "../../../../model/Teacher.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import {apiResponse} from '../../../../utils/apiResponse.js'


const allTeachersController = asyncHandler(async (req, res) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.query
   * filter by search
   * add link in indivisual teacher profile
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

  page = Number(page);
  limit = Number(limit);

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  const filterSearch = await Teacher.find({
    name: { $regex: search, $options: "i" },
  })
    .sort(sortKey)
    .skip((page - 1) * limit)
    .limit(limit);

  // add link
  const teachers = filterSearch.map((teacher) => ({
    ...teacher._doc,
    link: `${req.path}/${teacher._id}`,
  }));

  // pagination
  const totalItems = await Teacher.countDocuments(teachers);
  const pagination = await Pagination(page, limit, totalItems, "teachers");

  // links
  const links = await Links(req, pagination, 'teachers');

  res.status(200).json(new apiResponse(200, {teachers, pagination, links}, "List of All Teachers"))
});

export { allTeachersController };
