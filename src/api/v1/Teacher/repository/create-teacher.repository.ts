import type { Types } from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { Teacher } from "../model/Teacher.model.js";

interface ImageType {
  url: string;
}

interface TeacherType {
  userId: Types.ObjectId;
  education: string;
  certificate?: ImageType;
  experience?: string;
}

export const CreateTeacher = async ({
  userId,
  education,
  certificate,
  experience,
}: TeacherType) => {
  try {

    const teacher = await Teacher.create({
      userId,
      education,
      certificate: certificate?.url || null, 
      experience: experience || "0 years of experience",
    });

    return teacher
  } 
  catch (error: any) {
    throw new apiError(500, error?.message || "Internal Server Error");
  }
};
