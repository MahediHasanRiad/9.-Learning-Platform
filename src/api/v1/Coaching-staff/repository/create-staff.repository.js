import { apiError } from "../../../../utils/apiError.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";

export const CreateStaff = async ({ staffId, coachingId, role }) => {
  try {
    const coachingStaff = await CoachingStaff.create({
      staffId,
      coachingId,
      role,
    });

    return coachingStaff;
  } 
  catch (error) {
    throw new apiError(400, error.message);
  }
};
