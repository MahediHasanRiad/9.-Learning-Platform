import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";


export const existTeacher = async (teacherId) => {
  try {
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) throw new apiError(400, "Teacher not found !!!");
  } 
  catch (error) {
    throw new apiError(400, error.message);
  }
};
