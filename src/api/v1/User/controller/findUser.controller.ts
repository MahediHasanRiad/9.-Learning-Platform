import { User } from "../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

const findUserController = asyncHandler(async (req: Request, res: Response) => {
  /**
   * get id = req.params
   * if(!id) return error
   * find user by id
   * res user
   */

  const id = req.params.id as string;
  if (!id) throw new apiError(400, "id required !!!");

  const user = await prisma.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      name: true,
      email: true,
      mobile: true,
      address: true,
      avatar: true,
      coverImage: true,
      bio: true,
      facebook: true,
      linkedIn: true,
    },
  });
  if (!user) throw new apiError(404, "user not found !!!");

  res.status(200).json(new apiResponse(200, user));
});

export { findUserController };
