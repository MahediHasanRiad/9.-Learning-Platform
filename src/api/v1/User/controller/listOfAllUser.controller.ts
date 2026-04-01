import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FindUserBasedOnSearch } from "../repository/find-user-by-search.repository.js";
import type { QueryType } from "../../Subjects/subject-type.js";
import { apiError } from "../../../../utils/apiError.js";
import { prisma } from "../../../../lib/prisma.js";

const listOfAllUserController = asyncHandler(async (req, res) => {
  /**
   * get {page, limit, sortType, sortBy, search} = req.params
   * filter by search
   * add link for indivisual user
   * add pagination
   * add links
   * res
   */

  let {
    page = 1,
    limit = 10,
    sortType = "desc",
    search = "",
  } = req.query as QueryType;

  // check all query params
  if (typeof page !== "string") page = "1";
  if (typeof limit !== "string") limit = "10";
  if (typeof sortType !== "string") sortType = "desc";
  if (typeof search !== "string") search = "";

  page = Number(req.query.page) || 1;
  limit = Number(req.query.limit) || 10;

  // filter user based on search
  const id = req.user?.id;
  if (!id) throw new apiError(400, "invalid token");

  const filterUser = await FindUserBasedOnSearch({
    search,
    sortType,
    page,
    limit,
    id,
  });

  // add link
  const users = filterUser?.map((user) => ({
    ...user,
    link: `/users/${user.id}`,
  }));
console.log(users)
  // count
  // const totalUser = await User.countDocuments(filterUser);
  const totalUser = await prisma.user.count({
    where: { name: { contains: search, mode: "insensitive" } },
  });
  // pagination
  const pagination = Pagination(page, limit, totalUser, "users");
  // links
  const links = Links(req, pagination, page, "users/all");

  res
    .status(200)
    .json(new apiResponse(200, { users, pagination, links }, "All user Lists"));
});

export { listOfAllUserController };
