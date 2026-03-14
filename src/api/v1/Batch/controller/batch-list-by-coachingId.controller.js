import mongoose from "mongoose";
import { Batch } from "../model/batch.model.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Pagination } from "../../../../utils/pagination.js";
import { Links } from "../../../../utils/links.js";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { FindCoaching } from "../repository/find-coaching.repository.js";
import { FilterBatchOnCoaching } from "../repository/filter-batch-by-coaching.repository.js";

export const batchListByCoachingIdController = asyncHandler(async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortType = "dec",
    sortBy = "updatedAt",
    search = "",
  } = req.query;
  page = Number(page);
  limit = Number(limit);

  const id = req.user._id;

  // find coaching
  const coaching = await FindCoaching(id)

  const sortKey = `${sortType === "dec" ? "-" : ""}${sortBy}`;

  // all batch based on coaching
  const batch = await FilterBatchOnCoaching({search, coachingId: coaching?._id, sortKey, page, limit})

  // pagination
  const totalItems = await Batch.countDocuments(batch);
  const pagination = await Pagination(page, limit, totalItems, "allBatches");

  // links
  const links = await Links(req, pagination, "batches");

  res.status(200).json(new apiResponse(200, { batch, pagination, links }));
});
