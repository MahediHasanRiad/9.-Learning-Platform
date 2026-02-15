import { apiResponse } from "../../../../utils/apiResponse.js";

export const Responses = async (res, user, accessToken) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new apiResponse(200, { user, accessToken }, "successfully loged-in !!!"),
    );
};
