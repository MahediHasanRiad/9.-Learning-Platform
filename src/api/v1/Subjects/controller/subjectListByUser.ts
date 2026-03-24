import { Subject } from "../model/subject.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";

export const subjectListByUserController = asyncHandler(async (req: Request, res: Response) => {

  const id = req.user?._id
  if(!id) throw new apiError(400, 'Invalid Token !!!') 

  const listOfSubjects = await Subject.find({userId: id})
  
  res.status(200).json(new apiResponse(200, listOfSubjects)) 
})