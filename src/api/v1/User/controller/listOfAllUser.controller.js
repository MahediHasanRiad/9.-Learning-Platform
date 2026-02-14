import { User } from "../../../../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

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
//   sortBy = Number(sortBy);

  const sortkey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  const filterUser = await User.find({
    name: { $regex: search, $options: "i" },
  })
    .sort(sortkey)
    .skip((page - 1) * limit)
    .limit(limit);

  // add link
  const users = filterUser.map((user) => ({
    ...user._doc,
    link: `/user/${user._id}`,
  }));

  // count
  const totalUser = await User.countDocuments(filterUser);
  const totalPage = Math.ceil(totalUser / limit);

  // pagination
  const pagination = {
    page: page,
    limit: limit,
    totalPage,
    totalUser: totalUser,
  };

  if (page > 1) {
    pagination.prev = `/users/${page - 1}`;
  }
  if (page < totalPage) {
    pagination.next = `/users/${page + 1}`;
  }

  // links
  const links = {
    self: `${req.path}`,
  };

  if (pagination.prev) {
    const query = new URLSearchParams(req.query).toString();
    links.prev = `/users?${page - 1}${query}`;
  }

  if (pagination.next) {
    const query = new URLSearchParams(req.query).toString();
    links.next = `/users?${page + 1}${query}`;
  }

  res
    .status(200)
    .json(new apiResponse(200, { users, pagination, links }, "All user Lists"));
});

export { listOfAllUserController };
