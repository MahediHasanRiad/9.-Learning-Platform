import { Batch } from "../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FilterBatchOnSearch } from "../repository/filter-batch-by-search.repository.js";

export const allBatchController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;

  page = Math.max(1, Number(page));
  limit = Math.max(1, Number(limit));

  // Build Filter Object
  const filter = {};
  if (search) {
    filter.CcName = { $regex: search, $options: "i" };
  }

  // Sort Stage Object
  const sortStage = {
    [sortBy]: sortType === "dec" ? -1 : 1,
  };

  // total item count
  const totalItems = await Batch.countDocuments(filter);

  // filter batch
  const batch = await FilterBatchOnSearch({filter, sortStage, page, limit})

  // Pagination & Links
  const pagination = await Pagination(page, limit, totalItems, "allBatches");
  const links = await Links(req, pagination, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});