import { Subject } from "../model/subject.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { FilterSubject } from "../repository/filter-subject.repository.js";

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
    page = Math.max(1, Number(page || 1));
    limit = Math.max(1, Number(limit || 10));

    // sort key
    const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

    // filter subjects based on search
    const filterSubjects = await FilterSubject({search, sortKey, page, limit})

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
