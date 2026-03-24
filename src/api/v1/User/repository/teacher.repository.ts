import { apiError } from "../../../../utils/apiError.js";
import { Teacher } from "../../Teacher/model/Teacher.model.js";

export const FindTeacher = async (userId: string) => {
  try {
    const teacher = await Teacher.findOne({ userId: userId });
    if(!teacher) throw new apiError(400, 'teacher not found')
    return teacher?.toObject();
  } 
  catch (error) {
    console.log("Find Teacher Error", error);
    return null
  }
};
