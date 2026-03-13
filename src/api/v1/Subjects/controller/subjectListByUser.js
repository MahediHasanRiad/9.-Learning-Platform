import { Subject } from "../model/subject.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const subjectListByUserController = asyncHandler(async (req, res) => {


  const listOfSubjects = await Subject.find({userId: req.user._id})
  
  res.status(200).json(new apiResponse(200, listOfSubjects)) 
})