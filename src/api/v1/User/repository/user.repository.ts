import { apiError } from "../../../../utils/apiError.js";
import { User } from "../model/user.model.js";

export const FindUser = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) throw new apiError(404, "User not Found !!!");

    return user;
  } 
  catch (error) {
    console.log("Find User Error", error);
  }
};
