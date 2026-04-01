import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";


export const FindSubjectById = async (id: string) => {
  try {
    const subject = await prisma.subject.findUnique({where: {id: id}})
    if (!subject) throw new apiError(400, "subject not found !!!");

    return subject;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
