import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface subjectType {
  id: string;
  name: string;
  className: string;
}

export const CreateSubject = async ({ id, name, className }: subjectType) => {
  try {
    const subject = await prisma.subject.create({
      data: {
        name,
        className,
        userId: id,
      },
    });

    return subject;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error?.message);
  }
};
