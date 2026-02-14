import { User } from "../model/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

const authVerify = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '')
    if(!token) throw new apiError(400, 'Invalid Token !!!')

    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY)

    const user = await User.findById(decoded._id)

    req.user = user
    next()
})

export {authVerify}