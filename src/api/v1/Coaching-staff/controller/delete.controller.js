import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";


export const deleteCoachingStaffController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const staff = await CoachingStaff.findByIdAndDelete(id);
  if (!staff) throw new apiError(404, "staff not found !!!");

  res.status(204).json(new apiResponse(204, '', "successfully deleted !"));

});
