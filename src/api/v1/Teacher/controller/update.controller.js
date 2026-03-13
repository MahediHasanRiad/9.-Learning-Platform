import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { User } from "../../User/model/user.model.js";
import { FindTeacherByID } from "../repository/find-teacher-by-id.repository.js";
import { UpdateTeacher } from "../repository/update-teacher.repository.js";
import { UpdateUser } from "../repository/update-user.repository.js";
import { UpdateTeacherFields } from "../validation/update-teacher.validation.js";
import { UpdateUserFields } from "../validation/update-user.validation.js";


const updateTeacherController = asyncHandler(async (req, res) => {
  const {
    name,
    mobile,
    address,
    bio,
    facebook,
    linkedIn,
    education,
    availableDay,
    availableTime,
    experience,
  } = req.body;
  const { id } = req.params;

  const userId = req.user._id;

  // find teacher
  const findTeacher = await FindTeacherByID(id)

  if (findTeacher.userId._id.toString() !== userId.toString()) {
    throw new apiError(403, "unauthorized");
  }

  // check teacher input values for update
  const updatedTeacher = await UpdateTeacherFields({education, availableDay, availableTime, experience, req})

  // update teacher
  const teacher = await UpdateTeacher({id, updatedTeacher})

  // check user input value for update
  const userUpdated = await UpdateUserFields({req, name, mobile, address, bio, linkedIn, facebook})

  // update user
  const user = await UpdateUser({userId, userUpdated})

  res.status(200).json(new apiResponse(200, { user, teacher }));
});

export { updateTeacherController };
