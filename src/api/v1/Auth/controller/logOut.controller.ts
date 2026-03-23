import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { optionsType } from "../auth-types.js";

export const logOutController = asyncHandler(async (req, res) => {
  const options: optionsType = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new apiResponse(200, [], "successfully Loged Out !!!"));
});
