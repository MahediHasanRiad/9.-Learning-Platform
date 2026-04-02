import mongoose from "mongoose";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { prisma } from "../../../../lib/prisma.js";

export const deleteBatchController = asyncHandler(async (req, res) => {
  const id = req.params.id as string

  if(!id) throw new apiError(400, 'invalid batch id !!!')

  await prisma.batch.delete({where: {id: id}})

  res.status(204).json(new apiResponse(200, null, 'successfully deleted !'))
})