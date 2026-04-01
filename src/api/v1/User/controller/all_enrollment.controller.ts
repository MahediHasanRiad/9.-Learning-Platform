import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Enrollment } from "../../Enrollment/model/enrollment.model.js";
import { EnrolledUser } from "../repository/enrolled-user.repository.js";
import { apiError } from "../../../../utils/apiError.js";
import type { Request, Response } from "express";
import type { QueryType } from "../../Subjects/subject-type.js";
import { prisma } from "../../../../lib/prisma.js";

export const allEnrolledController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.query
   * get find by req.user._id
   * add link {bath, teacher}
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
  ((page = Number(page)), (limit = Number(limit)));

  if(!req.user?.id) throw new apiError(400, 'Invalid Token !!!')

  // get all enrolled user
  const userId = req.user.id;
  const enrollmentBatch = await EnrolledUser({userId, sortType, page, limit})
   
  // add batch link
  const enrolled_Batch = enrollmentBatch?.map((batch) => ({
    ...batch,
    // self: `/batches/${batch?.batchId?.[0]?.id}`,
  }));

  // pagination
  const totalItems = await prisma.enrollment.count({where: {studentId: userId}});
  const pagination = Pagination(
    page,
    limit,
    totalItems,
    "user/enrollments",
  );

  // links
  const links = Links(req, pagination, page, "user/enrollments");

  res
    .status(200)
    .json(new apiResponse(200, { enrolled_Batch, pagination, links }));
});
