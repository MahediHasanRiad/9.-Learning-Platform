import { DemoClass } from "../model/demoClass.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existBatch } from "../repository/exist_Batch.js";
import { existSubject } from "../repository/exist_Subject.js";
import { existTeacher } from "../repository/exist_user.js";
import { UpdateDemoClass } from "../repository/update-demoClass.repository.js";

export const updateDemoClassController = asyncHandler(async (req, res) => {
  /**
   * get {title, videoURL, subjectId, batchId, teacherId, status} = req.body
   * if(!exist = subjectId, batchId, teacherId) return error
   * update
   * res
   */

  const { title, videoURL, subjectId, batchId, teacherId, status } = req.body;
  const { id } = req.params;

  // check exist subject, batch, teacher
  await existSubject(subjectId);
  await existBatch(batchId);
  await existTeacher(teacherId);

  // update
  const demoClass = await UpdateDemoClass({
    id,
    title,
    videoURL,
    subjectId,
    batchId,
    teacherId,
    status,
  });

  res.status(200).json(new apiResponse(200, demoClass));
});
