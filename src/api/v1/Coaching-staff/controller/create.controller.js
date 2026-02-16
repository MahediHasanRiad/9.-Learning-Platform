import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Teacher } from "../../../../model/Teacher.model.js";
import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { Subject } from "../../../../model/subject.model.js";

export const createStaffController = asyncHandler(async (req, res) => {
  /**
   * get id = req.user.id
   * get {userId, coachingCenterId, role, subjects}
   * if(!user) return error
   * if(!coaching) return error
   * create
   * res
   */

  const { teacherName, CcName, role = "Teacher", subjects } = req.body;

  if ([CcName, role].some((item) => item.trim() === ""))
    throw new apiError(400, "coachingCenterId and role are required !!!");

  // exist user
  const user = await Teacher.findOne({ teacherName });
  if (!user) throw new apiError("invalid teacher id !!!");

  // exist coacheing center
  const coaching = await CoachingCenter.findOne({ CcName });
  if (!coaching) throw new apiError(400, "invalid coaching center !!!");

  // exist subject
  if (!Array.isArray(subjects) || subjects.length === 0)
    throw new apiError(400, "Subject id required !!!");

  const existSubjects = await Subject.find({ _id: { $in: subjects } });
  if (existSubjects.length !== subjects.length)
    throw new apiError(400, "one or more subject id are invalid !!!");


  // create
  const coachingStaff = await CoachingStaff.create({
    teacherName: user._id,
    CcName: coaching._id,
    role: role.toUpperCase(),
    subjects: subjects,
  });

  res
    .status(201)
    .json(new apiResponse(201, coachingStaff, "successfully created !!!"));
});
