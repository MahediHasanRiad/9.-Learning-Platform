import { apiError } from "../../../../utils/apiError.js"
import { prisma } from "../../../../lib/prisma.js";


interface TeacherType {
  userId: string;
  education: string;
  certificate?: string;
  experience?: string;
}

export const CreateTeacher = async ({
  userId,
  education,
  certificate,
  experience,
}: TeacherType) => {
  try {

    const teacher = await prisma.teacher.create({data: {
      userId,
      education,
      certificate: certificate || null, 
      experience: experience || "0 years of experience",
    }})

    return teacher
  } 
  catch (error: any) {
    throw new apiError(500, error?.message || "Internal Server Error");
  }
};
