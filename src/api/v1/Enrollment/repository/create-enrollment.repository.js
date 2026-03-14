import { apiError } from "../../../../utils/apiError.js"
import { Enrollment } from "../model/enrollment.model.js";

export const CreateEnrollment = async ({id, batchId}) => {
  try {
    const enrollment = await Enrollment.create({
        studentId: id,
        batchId,
      });

    return enrollment;
  } catch (error) {
    throw new apiError(400, error.message)
  }
}