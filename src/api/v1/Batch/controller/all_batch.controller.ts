import { Batch } from "../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Links } from "../../../../utils/links.js";
import { Pagination } from "../../../../utils/pagination.js";
import { FilterBatchOnSearch } from "../repository/filter-batch-by-search.repository.js";
import type { QueryType } from "../batch-type.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { apiError } from "../../../../utils/apiError.js";

export const allBatchController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query as Partial<QueryType>;

  page = Math.max(1, Number(page));
  limit = Math.max(1, Number(limit));

  const id = req.user?._id?.toString()
  if(!id) throw new apiError(400, 'Invalid Token !!!')

  // Sort Stage Object
  const sortKey = `${sortType === 'dec' ? `-${sortBy}` : `${sortBy}`}`
  
  // filter batch
  const batch = await FilterBatchOnSearch({search, sortKey, page, limit})

  // total item count
  const totalItems = await Batch.countDocuments(batch);

  // Pagination & Links
  const pagination = Pagination(page, limit, totalItems, "allBatches");
  const links = Links(req, pagination, page, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});