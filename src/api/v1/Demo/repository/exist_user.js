import { apiError } from "../../../../utils/apiError.js";
import { Teacher } from "../../Teacher/model/Teacher.model.js";
import { User } from "../../User/model/user.model.js";

export const existUser = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) throw new apiError(400, "user not found !!!");
  } catch (error) {
    throw new apiError(400, error.message);
  }
};

export const existTeacher = async (id) => {
  try {
    const user = await Teacher.findById(id);
    if (!user) throw new apiError(400, "Teacher not found !!!");
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
