import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";


export const FindTeacherByID = async (id: string) => {
  try {
    
    const teacher = await prisma.teacher.findUnique({
      where: { id: id },
      include: { user: true },
    });
    if (!teacher) throw new apiError(404, "teacher not found !!!");

    return teacher;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(404, error?.message);
  }
};
