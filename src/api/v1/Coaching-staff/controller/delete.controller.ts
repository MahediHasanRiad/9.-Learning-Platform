import { CoachingStaff } from "../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";


export const deleteCoachingStaffController = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const staff = await CoachingStaff.findByIdAndDelete(id);
  if (!staff) throw new apiError(404, "staff not found !!!");

  res.status(204).json(new apiResponse(204, null, "successfully deleted !"));

});
