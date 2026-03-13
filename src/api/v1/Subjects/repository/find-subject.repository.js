import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

export const FindSubject = async (id) => {
  try {
    const subject = await Subject.findOne({ name, className, userId: id });
    if (subject) throw new apiError(400, "already exist");

    return subject
  } 
  catch (error) {
    throw new apiError("Find Subject By Id", error.message);
  }
};
