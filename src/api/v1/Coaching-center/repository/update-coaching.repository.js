import { apiError } from "../../../../utils/apiError.js"
import { CoachingCenter } from "../model/CoachingCenter.model.js";

export const UpdateData = async ({id, updatedData}) => {
  try {
    const coaching = await CoachingCenter.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true },
      );
    
      return coaching
  } catch (error) {
    throw new apiError(400, error.message)
  }
}