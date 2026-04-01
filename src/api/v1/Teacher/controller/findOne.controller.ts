import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindTeacherByID } from "../repository/find-teacher-by-id.repository.js";

const findSingleTeacherController = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  if (!id) throw new apiError(400, "teacher id required !!!");

  // find teacher
  const teacher = await FindTeacherByID(id);

  res.status(200).json(new apiResponse(200, teacher));
});

export { findSingleTeacherController };
