import { User } from "../model/user.model.js";

export const ExistUser = async (email) => {
  try {
    const existUser = await User.findOne({ email });
    if (existUser) throw new apiError(400, "Exist User !!!");
  } 
  catch (error) {
    console.log("Exist User", error);
  }
};
