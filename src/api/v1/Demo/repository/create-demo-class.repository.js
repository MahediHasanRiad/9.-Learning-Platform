import { apiError } from "../../../../utils/apiError.js"
import { DemoClass } from "../model/demoClass.model.js";

export const CreateDemoClass = async ({id, title, videoURL, subjectId, batchId}) => {
  try {
    const demoClass = await DemoClass.create({
        title,
        videoURL,
        subjectId,
        batchId,
        userId: id,
      });

    return demoClass
  } 
  catch (error) {
    throw new apiError(400, error.message)
  }
}