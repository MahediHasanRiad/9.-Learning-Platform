import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { UpdateDemoClass } from "../repository/update-demoClass.repository.js";
import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { UpdateData } from "../validation/updateData.validation.js";
import type { DemoClassType } from "../Demo-type.js";



export const updateDemoClassController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get {title, videoURL, subjectId, batchId, teacherId, status} = req.body
   * if(!exist = subjectId, batchId, teacherId) return error
   * update
   * res
   */

  const { title, videoURL, subjectId, batchId, teacherId, status = "Draft" } = req.body as Partial<DemoClassType>;
  
  const id = req.params.id as string;
  if(!id) throw new apiError(400, 'param id not found !!!')

  // validation
  const validateUpdateData = UpdateData({title, videoURL, subjectId, batchId, teacherId, status})

  // update
  const demoClass = await UpdateDemoClass(id, validateUpdateData);

  res.status(200).json(new apiResponse(200, demoClass));
});
