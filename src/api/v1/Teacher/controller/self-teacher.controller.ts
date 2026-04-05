import type { Request, Response } from "express";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindTeacher } from "../../User/repository/teacher.repository.js";
import { apiResponse } from "../../../../utils/apiResponse.js";

export const SelfTeacherController = asyncHandler(
  async (req: Request, res: Response) => {

    const id = req.user?.id as string;

    const teacher = await FindTeacher(id);

    res.status(200).json(new apiResponse(200, teacher));
  },
);

