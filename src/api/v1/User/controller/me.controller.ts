import type { Request, Response } from "express";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
// import { FindTeacher } from "../repository/teacher.repository.js";
import { FindUser } from "../repository/user.repository.js";

export const meController = asyncHandler(async (req: Request, res: Response) => {

  const id = req.user!.id;

  const user = await FindUser(id.toString())
  // const teacher = await FindTeacher(user._id)


  res.status(200).json(
    new apiResponse(200, {
      user,
      // teacher
    })
  );
});
