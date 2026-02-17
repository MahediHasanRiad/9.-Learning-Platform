import { DemoClass } from "../../../../model/demoClass.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { existBatch } from "../utils/exist_Batch.js";
import { existSubject } from "../utils/exist_Subject.js";
import { existTeacher } from "../utils/exist_Teacher.js";


export const updateDemoClassController = asyncHandler(async (req, res) => {
  /**
   * get {title, videoURL, subjectId, batchId, teacherId, status} = req.body
   * if(!exist = subjectId, batchId, teacherId) return error
   * update
   * res
   */

  const {title, videoURL, subjectId, batchId, teacherId, status} = req.body
  const {id} = req.params

  // check exist subject, batch, teacher
  await existSubject(subjectId)
  await existBatch(batchId)
  await existTeacher(teacherId)

  const demoClass = await DemoClass.findByIdAndUpdate(id, {
    title,
    videoURL,
    subjectId,
    batchId,
    teacherId,
    status
  })


  res.status(200).json(new apiResponse(200, demoClass))

})