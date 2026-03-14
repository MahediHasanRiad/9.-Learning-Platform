import { User } from "../model/user.model.js";

export const UpdateUser = async ({ id, updated }) => {
  try {
    console.log("u", updated);
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
