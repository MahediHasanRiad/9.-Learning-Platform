import { apiError } from "../../../../utils/apiError.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";

export const UpdateStaff = async ({ id, role }) => {
  try {
    const updated = {};
    if (role) updated.role = role;

    const staff = await CoachingStaff.findByIdAndUpdate(
      id,
      { $set: updated },
      { new: true },
    );

    return staff
  } 
  catch (error) {
    throw new apiError(400, error.message);
  }
};
