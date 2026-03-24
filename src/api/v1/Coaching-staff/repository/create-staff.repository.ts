import { apiError } from "../../../../utils/apiError.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";

interface CreateStaffType {
  staffId: string;
  coachingId: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

export const CreateStaff = async ({ staffId, coachingId, role }: CreateStaffType) => {
  try {
    const coachingStaff = await CoachingStaff.create({
      staffId: staffId,
      coachingId: coachingId,
      role: role,
    });

    return coachingStaff;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message);
  }
};
