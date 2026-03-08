import { Teacher } from "../../../../model/Teacher.model.js";
import { User } from "../../../../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const meController = asyncHandler(async (req, res) => {
  const id = req.user._id;

  const user = await User.findById(id).select("-password");
  if (!user) throw new apiError("invalid token");

  const teacher = await Teacher.findOne({ userId: user._id });
  if(!teacher) return

  res.status(200).json(
    new apiResponse(200, {
      user,
      teacher
    })
  );
});
