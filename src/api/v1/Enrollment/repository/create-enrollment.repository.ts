import { apiError } from "../../../../utils/apiError.js"
import { Enrollment } from "../model/enrollment.model.js";

interface enrollment {
  id: string;
  batchId: string;
}

export const CreateEnrollment = async ({id, batchId}: enrollment) => {
  try {
    const enrollment = await Enrollment.create({
        studentId: id,
        batchId,
      });

    return enrollment;
  } catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message)
  }
}