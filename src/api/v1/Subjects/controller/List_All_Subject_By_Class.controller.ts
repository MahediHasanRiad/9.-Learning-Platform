import { Subject } from "../model/subject.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { FilterSubject } from "../repository/filter-subject.repository.js";
import type { QueryType } from "../subject-type.js";
import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

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
      sortType = "desc",
      search = "",
    } = req.query as Partial<QueryType>;

    page = Math.max(1, Number(page || 1));
    limit = Math.max(1, Number(limit || 10));

    // filter subjects based on search
    const filterSubjects = await FilterSubject({
      search,
      sortType,
      page,
      limit,
    });

    // pagination
    const totalItems = await prisma.subject.count({
      where: { name: { contains: search ? search : "", mode: "insensitive" } },
    });
    const pagination = Pagination(page, limit, totalItems, "subjects");

    // links
    const links = Links(req, pagination, page, "subjects");

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
