import { Subject } from "../../../../model/subject.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const subjectListByTeacherController = asyncHandler(async (req, res) => {
  const {id} = req.params 

  const listOfSubjects = await Subject.findOne({userId: id})
  
  res.status(200).json(new apiResponse(200, listOfSubjects)) 
})