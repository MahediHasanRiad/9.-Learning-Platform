import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

export const UpdateSubject = async ({id, name, className}) => {
  try {
    const updateSubject = {};
    if (name) updateSubject.name = name;
    if (className) updateSubject.className = className;

    const subject = await Subject.findByIdAndUpdate(
      id,
      { $set: updateSubject },
      { new: true },
    );

    return subject;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
