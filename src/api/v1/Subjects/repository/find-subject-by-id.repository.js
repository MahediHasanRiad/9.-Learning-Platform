import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

export const FindSubjectById = async (id) => {
  try {
    const subject = await Subject.findById(id);
    if (!subject) throw new apiError(400, "subject not found !!!");

    return subject;
  } 
  catch (error) {
    throw new apiError(400, error.message);
  }
};
