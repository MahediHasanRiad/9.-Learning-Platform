import { apiError } from "../../../../utils/apiError.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";
import { User } from "../../User/model/user.model.js";


export const verifyUser = async (email: string, password: string) => {
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) throw new apiError(404, "User not found !!!");
  
    const isValidPassword = await findUser.isPasswordCorrect(password);
    if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");
  
    const user = await User.findById(findUser._id).select("-password")
    if(!user) throw new apiError(404, 'user not found !!!')
  
    const accessToken = await generateToken(findUser._id.toString());
  
  
    return {
      user,
      accessToken
    }
  } catch (error: any) {
    throw new apiError(400, error?.message || 'something went wrong in verify user !!!')
  }
};
