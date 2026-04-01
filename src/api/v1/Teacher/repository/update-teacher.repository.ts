import { apiError } from "../../../../utils/apiError.js";
import { prisma } from "../../../../lib/prisma.js";

interface UpdateTeacher {
  education?: string | undefined;
  availableDay?: string | undefined;
  availableTime?: string | undefined;
  experience?: string | undefined;
  certificate?: string | undefined;
}

interface Update {
  id: string;
  updatedTeacher: Partial<UpdateTeacher>
}

export const UpdateTeacher = async ({id, updatedTeacher}: Update) => {
  try {
    
    const teacher = await prisma.teacher.update({where: {id: id}, data: updatedTeacher as any})
    return teacher
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(500, error?.message);
  }
};
