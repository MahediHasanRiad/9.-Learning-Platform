import { apiError } from "../../../../utils/apiError.js";
import { Teacher } from "../model/Teacher.model.js";

export const FindTeacherByID = async (id: string) => {
  try {
    const teacher = await Teacher.findById(id)
      .populate("userId")
      .select("-password");
    if (!teacher) throw new apiError(404, "teacher not found !!!");

    return teacher;
  } catch (error: any) {
    console.log(error)
    throw new apiError(404, error?.message);
  }
};
