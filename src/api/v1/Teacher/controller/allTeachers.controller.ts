import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Teacher } from "../model/Teacher.model.js";
import { FindTeacherOnSearch } from "../repository/find-teacher-on-search.repository.js";
import type { Request, Response } from "express";
import type { QueryType } from "../../Subjects/subject-type.js";
import { prisma } from "../../../../lib/prisma.js";

const allTeachersController = asyncHandler(
  async (req: Request, res: Response) => {
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
      sortType = "desc",
      search = "",
    } = req.query as QueryType;

    // varify query
    page = Number(req.query.page) || 1;
    limit = Number(req.query.limit) || 10;

    // find teacher by search
    const filterSearch = await FindTeacherOnSearch({
      search,
      sortType,
      page,
      limit,
    });

    // add link
    const teachers = filterSearch.map((teacher) => ({
      ...teacher,
      link: `${req.path}/${teacher.id}`,
    }));

    // pagination
    const totalItems = await prisma.teacher.count({
      where: { user: { name: { contains: search, mode: "insensitive" } } },
    });
    const pagination = Pagination(page, limit, totalItems, "teachers");

    // links
    const links = Links(req, pagination, page, "teachers");

    res
      .status(200)
      .json(
        new apiResponse(
          200,
          { teachers, pagination, links },
          "List of All Teachers",
        ),
      );
  },
);

export { allTeachersController };
