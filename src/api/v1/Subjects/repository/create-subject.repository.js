import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

export const CreateSubject = async (id) => {
  try {
    const subject = await Subject.create({
      name,
      className,
      userId: id,
    });

    return subject;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
