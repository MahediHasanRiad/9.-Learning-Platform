import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { User } from "../../../../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { apiError } from "../../../../utils/apiError.js";

const updateUserController = asyncHandler(async (req, res) => {
  const { name, email, password, mobile, role, classLevel, subjectOfInterest } = req.body;
  const { id } = req.params;

  const existUser = await User.findById(id);
  if (!existUser) throw new apiError(404, "user not found !!!");

  const user = await User.findByIdAndUpdate(id, {
    name: name || existUser.name,
    email: email || existUser.email,
    mobile: mobile || existUser.mobile,
    password: password || existUser.password,
    role: role || existUser.role,
    classLevel: classLevel || existUser.classLevel,
    subjectOfInterest: subjectOfInterest || existUser.subjectOfInterest
  });

  res.status(200).json(new apiResponse(200, user, "successfully updated !!!"));
});

export { updateUserController };
