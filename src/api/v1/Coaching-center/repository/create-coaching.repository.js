import { apiError } from "../../../../utils/apiError.js"
import { CoachingCenter } from "../model/CoachingCenter.model.js";

export const CreateCoaching = async (userId) => {
  try {
    const coachingCenter = await CoachingCenter.create({
        CcName,
        address,
        userId: userId,
      });

      return coachingCenter;
  } catch (error) {
    throw new apiError(400, error.message)
  }
}