import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";


export const verifyUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new apiError(404, "User not found !!!");
  
    const isValidPassword = await user.isPasswordCorrect(password);
    if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");
  
    const rmPass = await User.findById(user._id).select("-password")
  
    const { accessToken } = await generateToken(user._id);
  
  
    return {
      rmPass,
      accessToken
    }
  } catch (error) {
    throw new apiError(400, error.message)
  }
};
