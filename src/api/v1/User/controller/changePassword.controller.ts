import type { Request, Response } from "express";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindUser } from "../repository/user.repository.js";

const changePasswordController = asyncHandler(
  async (req: Request, res: Response) => {
    const { oldPassword, newPassword } = req.body;

    // check user has or not
    if (!req.user?._id) throw new apiError(400, "invalid token !!!");
    const id = req.user._id.toString();

    // check id === string
    if (typeof id !== "string")
      throw new apiError(400, "id must be string !!!");

    // check password
    if (!oldPassword || !newPassword)
      throw new apiError(400, "old and new password both are required !!!");

    // find user
    const user = await FindUser(id);
    if (!user) throw new apiError(400, "user not found !!!");

    const verifyPassword = await user.isPasswordCorrect(oldPassword);

    if (!verifyPassword) throw new apiError(400, "password not matched !!!");

    user.password = newPassword;
    await user.save();

    res.status(200).json(new apiResponse(200, user));
  },
);

export { changePasswordController };
