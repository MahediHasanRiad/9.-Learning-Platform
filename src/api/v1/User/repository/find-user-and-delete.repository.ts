import { apiError } from "../../../../utils/apiError.js";
import { User } from "../model/user.model.js";

export const FindUserThenDelete = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new apiError(404, "user not found !!!");
  } 
  catch (error: any) {
    throw new apiError(404, error?.message);
  }
};
