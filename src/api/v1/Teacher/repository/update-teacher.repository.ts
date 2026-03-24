import type { Types } from "mongoose";
import { apiError } from "../../../../utils/apiError.js";
import { Teacher } from "../model/Teacher.model.js";

interface UpdateTeacher {
  education?: string | undefined;
  availableDay?: string | undefined;
  availableTime?: string | undefined;
  experience?: string | undefined;
  certificate?: string | undefined;
}

interface Update {
  id: string;
  updatedTeacher: Partial<UpdateTeacher>
}

export const UpdateTeacher = async ({id, updatedTeacher}: Update) => {
  try {
    
    const teacher = await Teacher.findByIdAndUpdate(
      id,
      { $set: updatedTeacher },
      { new: true },
    );

    return teacher
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(500, error?.message);
  }
};
