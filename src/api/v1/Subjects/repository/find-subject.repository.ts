import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

interface subjectType {
  id: string;
  name: string;
  className: string;
}

export const FindSubject = async ({id, name, className}: subjectType) => {
  try {
    const subject = await Subject.findOne({ name, className, userId: id });
    if (subject) throw new apiError(400, "already exist");

    return subject
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
