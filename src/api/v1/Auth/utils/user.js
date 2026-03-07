import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";


export const verifyUser = async (email, password) => {
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) throw new apiError(404, "User not found !!!");
  
    const isValidPassword = await findUser.isPasswordCorrect(password);
    if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");
  
    const user = await User.findById(findUser._id).select("-password")
  
    const { accessToken } = await generateToken(findUser._id);
  
  
    return {
      user,
      accessToken
    }
  } catch (error) {
    throw new apiError(400, error.message)
  }
};
