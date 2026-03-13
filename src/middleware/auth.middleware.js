import { User } from "../api/v1/User/model/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authVerify = asyncHandler(async (req, _res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) throw new apiError(400, "Invalid Token !!!");

  const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

  let user = await User.findById(decoded._id);
  if (!user) throw new apiError("Invalid Token !!!");
  
  req.user = user;
  next();
});

export { authVerify };
