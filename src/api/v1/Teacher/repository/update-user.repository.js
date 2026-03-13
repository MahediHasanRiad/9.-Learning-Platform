import { apiError } from "../../../../utils/apiError.js"
import { User } from "../../User/model/user.model.js";

export const UpdateUser = async ({userId, userUpdated}) => {
  try {
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: userUpdated },
        { new: true },
      );

      return user;
  } catch (error) {
    throw new apiError(400, error.message)
  }
}