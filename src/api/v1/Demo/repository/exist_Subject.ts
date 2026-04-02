import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js"

export const existSubject = async (subjectId: string) => {
  try {
    const subject = await prisma.subject.findFirst({where: {id: subjectId}})
    if (!subject) throw new apiError(400, "subject not found !!!");
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}