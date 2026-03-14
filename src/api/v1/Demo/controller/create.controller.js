import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { CreateDemoClass } from "../repository/create-demo-class.repository.js";
import { existBatch } from "../repository/exist_Batch.js";
import { existSubject } from "../repository/exist_Subject.js";
import { existUser } from "../repository/exist_user.js";
import { InputVarify } from "../validation/input-varify.validation.js";


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

  const { title, videoURL, subjectId, batchId } = req.body;
  const id = req.user._id;

  // input varify
  await InputVarify({title, subjectId, videoURL})

  //  TODO: working latter on videoURL

  // check exist subject, batch, teacher
  await existSubject(subjectId);
  await existBatch(batchId);
  await existUser(req.user._id);

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
