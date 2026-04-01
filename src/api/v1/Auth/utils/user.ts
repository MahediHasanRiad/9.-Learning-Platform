import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";
import type { userType } from "../../User/user-types.js";
import { ComparePassword } from "../service/password.js";


export const verifyUser = async (email: string, password: string) => {
  try {
    const findUser = await prisma.user.findUnique({where: {email: email}})
    if (!findUser) throw new apiError(404, "User not found !!!");
  
    const isValidPassword = await ComparePassword(findUser.password, password)
    if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");
  
    const user = await prisma.user.findUnique({where: {id: findUser.id}}) as userType
    if(!user) throw new apiError(404, 'user not found !!!')
  
    const accessToken = await generateToken(findUser.id);
  
  
    return {
      user,
      accessToken
    }
  } catch (error: any) {
    throw new apiError(400, error?.message || 'something went wrong in verify user !!!')
  }
};
