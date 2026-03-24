import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

interface UpdateType {
  id: string;
  name?: string;
  className?: string;
}

export const UpdateSubject = async ({id, name, className}: UpdateType) => {
  try {
    const updateSubject: Partial<UpdateType> = {};
    if (name) updateSubject.name = name;
    if (className) updateSubject.className = className;

    const subject = await Subject.findByIdAndUpdate(
      id,
      { $set: updateSubject },
      { new: true },
    );

    return subject;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message);
  }
};
