import { User } from "../model/user.model.js";

export const FindUser = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) throw new apiError("User not Found !!!");

    return user;
  } 
  catch (error) {
    console.log("Find User Error", error);
  }
};
