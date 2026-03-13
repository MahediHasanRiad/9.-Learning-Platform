
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { DemoClass } from "../model/demoClass.model.js";
import { existBatch } from "../utils/exist_Batch.js";
import { existSubject } from "../utils/exist_Subject.js";
import { existTeacher, existUser } from "../utils/exist_Teacher.js";



export const createDemoClassController = asyncHandler(async (req, res) => {
  /**
   * get {title, videoURL, subjectId, batchId, teacherId} = req.body
   * if (!title || !videoURL || !subjectId || !teacherId) return error
   * if(!subject) return error
   * if(!teacher) return error
   * if(!batch) return error
   * create
   * res
   */

  const { title, videoURL, subjectId, batchId} = req.body;

  if (!title || !subjectId)
    throw new apiError(
      400,
      "title, videoURL, subject --- field are required !!!",
    );

  //  TODO: working latter on videoURL

  // check exist subject, batch, teacher
  await existSubject(subjectId)
  await existBatch(batchId)
  await existUser(req.user._id)
  // await existTeacher(id)

  //create
  const demoClass = await DemoClass.create({
    title,
    videoURL,
    subjectId,
    batchId,
    userId: req.user._id,
  });

  res.status(201).json(new apiResponse(201, demoClass));
});
