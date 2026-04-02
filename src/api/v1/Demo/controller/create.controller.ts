import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { DemoClassType } from "../Demo-type.js";
import { CreateDemoClass } from "../repository/create-demo-class.repository.js";
import { existBatch } from "../repository/exist_Batch.js";
import { existSubject } from "../repository/exist_Subject.js";
import { existUser } from "../repository/exist_user.js";
import { InputVarify } from "../validation/input-varify.validation.js";


export const createDemoClassController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get {title, videoURL, subjectId, batchId, teacherId} = req.body
   * if (!title || !videoURL || !subjectId || !teacherId) return error
   * if(!subject) return error
   * if(!teacher) return error
   * if(!batch) return error
   * create
   * res
   */

  const { title, videoURL, subjectId, batchId } = req.body as DemoClassType;

  const id = req.user?.id?.toString();
  if(!id) throw new apiError(400, 'invalid Token !!!')

  // input varify
  await InputVarify({title, subjectId, videoURL})

  //  TODO: working latter on videoURL

  // check exist subject, batch, teacher
  await existSubject(subjectId);
  await existBatch(batchId);
  await existUser(id);

  //create
  const demoClass = await CreateDemoClass({
    id,
    title,
    videoURL,
    subjectId,
    batchId,
  });

  res.status(201).json(new apiResponse(201, demoClass));
});
