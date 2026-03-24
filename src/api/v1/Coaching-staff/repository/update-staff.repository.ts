import { apiError } from "../../../../utils/apiError.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";

interface UpdateStaffType {
  staffId: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

export const UpdateStaff = async ({ staffId, role }: UpdateStaffType) => {
  try {
    const updated: Partial<UpdateStaffType> = {};
    if (role) updated.role = role;

    const staff = await CoachingStaff.findByIdAndUpdate(
      staffId,
      { $set: updated },
      { new: true },
    );

    return staff
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
