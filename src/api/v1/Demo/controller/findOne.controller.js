import mongoose from "mongoose";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { DemoClass } from "../model/demoClass.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { FindDemoClass } from "../repository/find-demoClass.repository.js";


export const findSingleDemoClassController = asyncHandler(async (req, res) => {
  
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id))
    throw new apiError(400, "Demo class id not found !!!");

  // find demo-class
  const demoClass = await FindDemoClass(id)

  // add links
  const link = {
    self: `${req.path}`,
    // user: `/users/${demoClass.userId._id}`
  }
  if(demoClass.batchId){
    link.batch = `/batches/${demoClass.batchId._id}`
  }

  res.status(200).json(new apiResponse(200, {demoClass, link}))

});
