import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";


export const deleteCoachingStaffController = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const staff = await prisma.coachingStaff.delete({where: {id: id}});
  if (!staff) throw new apiError(404, "staff not found !!!");

  res.status(204).json(new apiResponse(204, null, "successfully deleted !"));

});
