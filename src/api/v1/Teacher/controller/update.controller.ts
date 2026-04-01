import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindTeacherByID } from "../repository/find-teacher-by-id.repository.js";
import { UpdateTeacher } from "../repository/update-teacher.repository.js";
import { UpdateUser } from "../repository/update-user.repository.js";
import type { TeacherType } from "../teachers-type.js";
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
  } = req.body as Partial<TeacherType>;
  
  const id = req.params.id as string;
  if(!id) throw new apiError(400, 'teacher id not found !!!')

  if(!req.user?.id) throw new apiError(400, 'Invalid Token !!!')
  const userId = req.user.id.toString();

  // find teacher
  const findTeacher = await FindTeacherByID(id)

  if (findTeacher.user.id !== userId) {
    throw new apiError(403, "unauthorized");
  }

  // check teacher input values for update
  const updatedTeacher = await UpdateTeacherFields({ education, availableDay, availableTime, experience, req });

  // update teacher
  const teacher = await UpdateTeacher({id, updatedTeacher})

  // check user input value for update
  const userUpdated = await UpdateUserFields({req, name, mobile, address, bio, linkedIn, facebook})

  // update user
  const user = await UpdateUser({userId, userUpdated})

  res.status(200).json(new apiResponse(200, { user, teacher }));
});

export { updateTeacherController };
