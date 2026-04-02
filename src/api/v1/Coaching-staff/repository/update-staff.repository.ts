import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface UpdateStaffType {
  staffId: string;
  role?: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

export const UpdateStaff = async ({ staffId, role }: UpdateStaffType) => {
  try {
    const updated: Partial<UpdateStaffType> = {};
    if (role) updated.role = role;

    const staff = await prisma.coachingStaff.update({where: {id: staffId}, data: updated})

    return staff
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message);
  }
};
