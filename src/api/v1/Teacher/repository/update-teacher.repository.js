import { apiError } from "../../../../utils/apiError.js";
import { Teacher } from "../model/Teacher.model.js";

export const UpdateTeacher = async ({id, updatedTeacher}) => {
  try {
    
    const teacher = await Teacher.findByIdAndUpdate(
      id,
      { $set: updatedTeacher },
      { new: true },
    ).populate("userId subjects");

    return teacher
  } catch (error) {
    throw new apiError("Update Teacher", error.message);
  }
};
