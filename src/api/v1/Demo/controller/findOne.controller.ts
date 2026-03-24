import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { FindDemoClass } from "../repository/find-demoClass.repository.js";
import type { Request, Response } from "express";

interface linkType {
  self?: string;
  batch?: string;
}

export const findSingleDemoClassController = asyncHandler(async (req: Request, res: Response) => {
  
  const id = req.params.id as string;
  if (!id) throw new apiError(400, "Demo class id not found !!!");

  // find demo-class
  const demoClass = await FindDemoClass(id)

  // add links
  const link: linkType = {
    self: `${req.path}`,
    // user: `/users/${demoClass.userId._id}`
  }
  if(demoClass.batchId){
    link.batch = `/batches/${demoClass.batchId._id}`
  }

  res.status(200).json(new apiResponse(200, {demoClass, link}))

});
