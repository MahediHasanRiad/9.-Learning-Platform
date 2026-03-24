import { apiError } from "../../../../utils/apiError.js";
import { CoachingCenter } from "../model/CoachingCenter.model.js";

export const CheckCoachingProfile = async (CcName: string) => {
  try {
    const coachingProfile = await CoachingCenter.findOne({ CcName });
    if (coachingProfile) throw new apiError(400, "Profile already exist");

    return coachingProfile
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message);
  }
};
