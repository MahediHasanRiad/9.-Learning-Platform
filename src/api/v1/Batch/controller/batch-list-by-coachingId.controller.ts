import { Batch } from "../model/batch.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { FilterBatchOnCoaching } from "../repository/filter-batch-by-coaching.repository.js";
import { apiError } from "../../../../utils/apiError.js";
import type { QueryType } from "../batch-type.js";

export const batchListByCoachingIdController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query as Partial<QueryType>;

  page = Number(page);
  limit = Number(limit);

  const id = req.user?._id?.toString();
  if(!id) throw new apiError(400, 'param id not found !!!')

  // find coaching
  const coaching = await FindCoaching(id)
  if(!coaching) throw new apiError(400, 'coaching center not found !!!')

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  // all batch based on coaching
  const coachingId = coaching?._id?.toString()
  const batch = await FilterBatchOnCoaching({search, coachingId, sortKey, page, limit})

  // pagination
  const totalItems = await Batch.countDocuments(batch);
  const pagination = Pagination(page, limit, totalItems, "allBatches");

  // links
  const links = Links(req, pagination, page, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});
