import { apiError } from "../../../../utils/apiError.js";
import { CoachingStaff } from "../model/CoachingStaff.model.js";

export const FindStaff = async (id) => {
  try {
    const staff = await CoachingStaff.findById(id)
      .select("-password")
      .populate("staffId", "name avatar mobile")
      .populate("coachingId", "CcName");
    if (!staff) throw new apiError(400, "coaching staff not found !!!");

    return staff;
  } 
  catch (error) {
    if (error instanceof Error) throw Error;
    new apiError(500, error.message);
  }
};
