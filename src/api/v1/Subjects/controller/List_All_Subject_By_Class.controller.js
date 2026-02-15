import { Subject } from "../../../../model/subject.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const listOfAllSubjectsByClassController = asyncHandler(
  async (req, res) => {
    /**
     * get {page, limit, sortType, sortBy, search} = req.query
     * filter by search
     * group by className
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

    // filter
    const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;
    const filterSubjects = await Subject.aggregate([
      {
        $match: {
          name: {
            $regex: search,
            $options: "i",
          },
        },
      },
      {
        $group: {
          _id: "$className",
          subjects: { $push: "$$ROOT" }
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ])
      .sort(sortKey)
      .skip((page - 1) * limit)
      .limit(limit);

    // pagination
    const totalItems = await Subject.countDocuments(filterSubjects);
    const pagination = await Pagination(page, limit, totalItems, "subjects");

    // links
    const links = await Links(req, pagination, "subjects");

    res
      .status(200)
      .json(
        new apiResponse(
          200,
          { filterSubjects, pagination, links },
          "List of all Subjects By Class",
        ),
      );
  },
);
