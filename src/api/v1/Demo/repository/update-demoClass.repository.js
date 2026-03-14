import { apiError } from "../../../../utils/apiError.js"
import { DemoClass } from "../model/demoClass.model.js"

export const UpdateDemoClass = async ({id, title, videoURL, subjectId, batchId, teacherId, status}) => {
  try {
    const demoClass = await DemoClass.findByIdAndUpdate(id, {
        title,
        videoURL,
        subjectId,
        batchId,
        teacherId,
        status
      })

    return demoClass
  } catch (error) {
    throw new apiError(400, error.message)
  }
}