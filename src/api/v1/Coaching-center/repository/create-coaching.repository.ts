import type { Types } from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { CoachingCenter } from "../model/CoachingCenter.model.js";

interface CreateCoachingType {
  CcName: string;
  address: string;
  userId: string;
}

export const CreateCoaching = async ({userId, CcName, address}: CreateCoachingType) => {
  try {
    const coachingCenter = await CoachingCenter.create({
        CcName,
        address,
        userId: userId,
      });

      return coachingCenter;
  } catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}