import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";

const logInController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  const user = await User.findOne({ email });
  if (!user) throw new apiError(404, "User not found !!!");

  const isValidPassword = await user.isPasswordCorrect(password);
  if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");

  const { accessToken } = await generateToken(user._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new apiResponse(200, {user, accessToken}, 'successfully loged-in !!!'));
});

export { logInController };
