import { User } from "../model/user.model.js";
import type { userType } from "../user-types.js";

interface UpdateUserType {
  id: string,
  updated: Partial<userType>
}

export const UpdateUser = async ({ id, updated }: UpdateUserType) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: updated,
      },
      { new: true },
    );

    return user;
  } catch (error) {
    console.log("Update user", error);
  }
};
