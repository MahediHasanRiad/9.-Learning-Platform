import type { Request, Response } from "express";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { QueryType } from "../batch-type.js";
import { GetAllBatch } from "../repository/get-all-batch.repository.js";
import { Pagination } from "../../../../utils/pagination.js";
import { prisma } from "../../../../lib/prisma.js";
import { Links } from "../../../../utils/links.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const getAllBatchesController = asyncHandler(
  async (req: Request, res: Response) => {
    let {
      page = 1,
      limit = 10,
      sortType = "desc",
      search = "",
    } = req.query as Partial<QueryType>;

    page = Number(page);
    limit = Number(limit);

    // get all batch
    const allBatch = await GetAllBatch({page, limit, sortType, search})

    // add link for every batch
    const batches = allBatch?.map(batch => ({
      ...batch,
      self: `/batches/${batch.id}`
    }))

    // pagination
    const totalItems = await prisma.batch.count({where: {name: {contains: search, mode: "insensitive"}}})
    const pagination = Pagination(page, limit, totalItems, 'batches')

    // links
    const links = Links(req, pagination, page, 'batches')

    res.status(200).json(new apiResponse(200, {batches, pagination, links}))
  },
);
