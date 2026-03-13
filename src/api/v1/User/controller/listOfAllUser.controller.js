import { User } from "../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FindUserBasedOnSearch } from "../repository/find-user-by-search.repository.js";

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
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;

  page = Number(page);
  limit = Number(limit);

  const sortkey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  // filter user based on search
  const filterUser = await FindUserBasedOnSearch({search, sortkey, page, limit})

  // add link
  const users = filterUser.map((user) => (
    {
    ...user._doc,
    link: `/users/${user._id}`,
  }
));

  // count
  const totalUser = await User.countDocuments(filterUser);
  // pagination
  const pagination = await Pagination(page, limit, totalUser, 'users')
  // links
  const links = await Links(req, pagination, 'users/all')

  res
    .status(200)
    .json(new apiResponse(200, { users, pagination, links }, "All user Lists"));
});

export { listOfAllUserController };
