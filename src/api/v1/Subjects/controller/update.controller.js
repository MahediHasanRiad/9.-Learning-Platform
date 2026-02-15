import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const updateSubjectController = asyncHandler(async (req, res) => {
  /**
   * get {name, className} = req.body
   * if(!name || !className) return error
   * if(exist = subject) then update
   * res
   */
  const { id } = req.params;
  const { name, className } = req.body;

  const existSubject = await Subject.findById(id);
  if (!existSubject) throw new apiError(400, "not found !!!");

  existSubject.name = name || existSubject.name,
  existSubject.className = className || existSubject.className;
  existSubject.save();

  res.status(200).json(new apiResponse(200, existSubject, "subject updated !"));
});
