import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const verifyTeacher = async (email, password) => {
  const teacher = await Teacher.findOne({ email });
  if (!teacher) throw new apiError(404, "Teacher not found !!!");

  const isValidPassword = await teacher.isPasswordCorrect(password);
  if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");

  const rmPass = await Teacher.findById(teacher._id).select("-password")

  const accessToken = await teacher.generateAccessToken();

  return {
    rmPass,
    accessToken,
  };
};
