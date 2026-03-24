import { apiError } from "../../../../utils/apiError.js"
import { User } from "../../User/model/user.model.js";
import type { TeacherType } from "../teachers-type.js";


interface Update {
  userId: string;
  userUpdated: Partial<TeacherType>
}

export const UpdateUser = async ({userId, userUpdated}: Update) => {
  try {
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: userUpdated },
        { new: true },
      );

      return user;
  } catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}