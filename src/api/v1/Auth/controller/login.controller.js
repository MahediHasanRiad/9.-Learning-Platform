import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Responses } from "../utils/response.js";
import { verifyTeacher } from "../utils/teacher.js";
import { verifyUser } from "../utils/user.js";
import { verifyCoachingCenter } from "../utils/verifyCoachingCenter.js";



const logInController = asyncHandler(async (req, res) => {
  
  const { email, password } = req.body;
  const { as = "student" } = req.query;

  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  if (as === "student") {
    const {student, accessToken} = await verifyUser(email, password)
    Responses(res, student, accessToken)
  }
  if (as === "teacher") {
    const {teacher, accessToken} = await verifyTeacher(email, password)
    Responses(res, teacher, accessToken)
  }
  if (as === "coaching") {
    const {coachingCenter, accessToken} = await verifyCoachingCenter(email, password)
    Responses(res, coachingCenter, accessToken)
  }
});

export { logInController };
