import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";


interface UpdateType {
  id: string;
  name?: string;
  className?: string;
}

export const UpdateSubject = async ({ id, name, className }: UpdateType) => {
  try {
    const updateSubject: Partial<UpdateType> = {};
    if (name) updateSubject.name = name;
    if (className) updateSubject.className = className;

    const subject = await prisma.subject.update({
      where: { id: id },
      data: updateSubject,
    });

    return subject;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
