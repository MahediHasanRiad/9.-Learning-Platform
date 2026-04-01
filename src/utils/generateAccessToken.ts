import { prisma } from "../lib/prisma.js";
import { apiError } from "./apiError.js";
import jwt from 'jsonwebtoken'

async function generateToken(id: string): Promise<string> {
  try {
    const user = await prisma.user.findUnique({where: {id: id}})
    if (!user) throw new apiError(404, "user not found for generate token !!!");

    // generate token
    const accessToken = jwt.sign(
      {
        id: id
      },
      process.env.ACCESS_TOKEN_SECRET_KEY as string,
      {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_DATE as any}
    )

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
