import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

export const existUser = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({where: {id: id}})
    if (!user) throw new apiError(400, "user not found !!!");
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};

export const existTeacher = async (id: string) => {
  try {
    const user = await prisma.teacher.findFirst({where: {id: id}})
    if (!user) throw new apiError(400, "Teacher not found !!!");
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
