import { apiError } from "../../../../utils/apiError.js"
import type { CoachingType } from "../coaching-type.js";
import { CoachingCenter } from "../model/CoachingCenter.model.js";

interface update {
  id: string;
  updatedData: Partial<CoachingType>
}

export const UpdateData = async ({id, updatedData}: update) => {
  try {
    const coaching = await CoachingCenter.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true },
      );
    
      return coaching
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}