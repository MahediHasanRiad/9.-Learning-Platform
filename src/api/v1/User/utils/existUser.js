import { User } from "../../../../model/user.model.js";

async function existUser() {
  const existUser = await User.findOne({ email });
  if (existUser) throw new apiError(400, "Exist User !!!");

  return existUser;
}
