import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js"

export const existSubject = async (subjectId) => {
  try {
    const subject = await Subject.findById(subjectId);
    if (!subject) throw new apiError(400, "subject not found !!!");
  } 
  catch (error) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}