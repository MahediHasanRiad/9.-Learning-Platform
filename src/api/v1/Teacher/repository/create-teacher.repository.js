import { apiError } from "../../../../utils/apiError.js"
import { Teacher } from "../model/Teacher.model.js";

export const CreateTeacher = async ({userId, education, certificate, experience}) => {
  try {
    const teacher = await Teacher.create({
        userId: userId,
        education,
        certificate: certificate.url || "",
        experience,
      });

      return teacher
  } 
  catch (error) {
    throw new apiError(500, error.message)
  }
}
