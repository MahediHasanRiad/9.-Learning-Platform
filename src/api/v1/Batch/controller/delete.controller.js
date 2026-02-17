import mongoose from "mongoose";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { Batch } from "../../../../model/batch.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const deleteBatchController = asyncHandler(async (req, res) => {
  const {id} = req.params 
  if(!id || !mongoose.Types.ObjectId.isValid(id)) throw new apiError(400, 'invalid batch id !!!')

  await Batch.findByIdAndDelete(id)

  res.status(204).json(new apiResponse(200, null, 'successfully deleted !'))
})