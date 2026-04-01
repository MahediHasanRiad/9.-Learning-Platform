import type { NextFunction, Request, Response } from "express";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import type { jwtDecodedType } from "../api/v1/User/user-types.js";
import { prisma } from "../lib/prisma.js";

const authVerify = asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) throw new apiError(400, "Invalid Token !!!");

  // decoded from token
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY as string) as jwtDecodedType;


  let user = await prisma.user.findUnique({where: {id: decoded.id}})
  if (!user) throw new apiError(404, "Invalid Token !!!");
  
  req.user = user;

  next();
});

export { authVerify };
