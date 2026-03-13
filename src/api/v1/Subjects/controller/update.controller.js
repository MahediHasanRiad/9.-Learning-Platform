import { Subject } from "../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindSubjectById } from "../repository/find-subject-by-id.repository.js";
import { UpdateSubject } from "../repository/update-subject.repository.js";

export const updateSubjectController = asyncHandler(async (req, res) => {
  /**
   * get {name, className} = req.body
   * if(!name || !className) return error
   * if(exist = subject) then update
   * res
   */
  const { id } = req.params;
  const { name, className } = req.body;

  // find subject
  await FindSubjectById(id);

  // update
  const subject = await UpdateSubject({ id, name, className });

  res.status(200).json(new apiResponse(200, subject, "subject updated !"));
});
