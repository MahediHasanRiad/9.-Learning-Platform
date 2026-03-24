import { apiError } from "../../../../utils/apiError.js"
import { DemoClass } from "../model/demoClass.model.js";

interface CreateType {
  id: string;
  title: string;
  videoURL: string;
  subjectId: string;
  batchId: string;
}

export const CreateDemoClass = async ({id, title, videoURL, subjectId, batchId}: CreateType) => {
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
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}