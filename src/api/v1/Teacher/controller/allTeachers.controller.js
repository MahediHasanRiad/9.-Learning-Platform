import { Teacher } from "../../../../model/Teacher.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

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

  page = Number(page)
  limit = Number(limit)

  const filterTeacher = await Teacher.find({[userID.name]: {$rege}})




});

export { allTeachersController };
