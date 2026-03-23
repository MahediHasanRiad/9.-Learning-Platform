import { User } from "../api/v1/User/model/user.model.js";
import { apiError } from "./apiError.js";

async function generateToken(id: string): Promise<string> {
  try {
    const user = await User.findById(id);
    if (!user) throw new apiError(404, "user not found for generate token !!!");

    const accessToken = user.generateAccessToken();
    if (!accessToken)
      throw new apiError(500, "Failed to generate access token");

    return accessToken;
  } 
  catch (error: any) {
    console.log(error);

    throw new apiError(
      error?.status || 500,
      error?.message || "Token generation failed",
    );
  }
}

export { generateToken };
