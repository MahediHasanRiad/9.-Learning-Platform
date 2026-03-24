import type { Response } from "express";
import { apiResponse } from "../../../../utils/apiResponse.js";
import type { optionsType } from "../auth-types.js";
import type { userType } from "../../User/user-types.js";

export const Responses = async (res: Response, user: userType, accessToken: string) => {
  const options: optionsType = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new apiResponse(200, { user, accessToken }, "successfully loged-in !!!"),
    );
};
