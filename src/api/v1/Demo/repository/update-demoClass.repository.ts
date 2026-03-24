import { apiError } from "../../../../utils/apiError.js"
import type { UpdateDemoClassType } from "../Demo-type.js"
import { DemoClass } from "../model/demoClass.model.js"


export const UpdateDemoClass = async (id: string, validateUpdateData: Partial<UpdateDemoClassType>) => {
  try {
    const demoClass = await DemoClass.findByIdAndUpdate(id, {$set: validateUpdateData}, {new: true})

    return demoClass
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}