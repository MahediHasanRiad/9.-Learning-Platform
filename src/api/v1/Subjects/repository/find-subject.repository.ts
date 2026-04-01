import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface subjectType {
  id: string;
  name: string;
  className: string;
}

export const FindSubject = async ({ id, name, className }: subjectType) => {
  try {

    const subject = await prisma.subject.findFirst({
      where: {
        AND: [{ userId: id }, { name: name }, { className: className }],
      },
    });
    if (subject) throw new apiError(400, "already exist");

    return subject;
  } catch (error: any) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
