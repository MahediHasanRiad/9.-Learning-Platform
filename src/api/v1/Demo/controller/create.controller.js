import { Batch } from "../../../../model/batch.model.js";
import { DemoClass } from "../../../../model/demoClass.model.js";
import { Subject } from "../../../../model/subject.model.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existBatch } from "../utils/exist_Batch.js";
import { existSubject } from "../utils/exist_Subject.js";
import { existTeacher } from "../utils/exist_Teacher.js";



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

  const { title, videoURL, subjectId, batchId, teacherId } = req.body;

  if (!title || !subjectId || !teacherId)
    throw new apiError(
      400,
      "title, videoURL, subject, teacher --- field are required !!!",
    );

  //  TODO: working latter on videoURL

  // check exist subject, batch, teacher
  await existSubject(subjectId)
  await existBatch(batchId)
  await existTeacher(teacherId)

  //create
  const demoClass = await DemoClass.create({
    title,
    videoURL,
    subjectId,
    batchId,
    teacherId,
  });

  res.status(201).json(new apiResponse(201, demoClass));
});
