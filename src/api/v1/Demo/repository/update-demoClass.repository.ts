import { prisma } from "../../../../lib/prisma.js"
import { apiError } from "../../../../utils/apiError.js"
import type { UpdateDemoClassType } from "../Demo-type.js"


export const UpdateDemoClass = async (id: string, validateUpdateData: Partial<UpdateDemoClassType>) => {
  try {

    const demoClass = await prisma.demoClass.update({where: {id: id}, data: validateUpdateData as any })
    return demoClass
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}