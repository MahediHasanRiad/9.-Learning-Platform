import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const FindTeacher = async (id: string) => {
  try {
    const teacher = await prisma.teacher.findFirst({where: {userId: id}});
    if(!teacher) throw new apiError(400, 'teacher not found')
    return teacher;
  } 
  catch (error) {
    console.log("Find Teacher Error", error);
    return null
  }
};
