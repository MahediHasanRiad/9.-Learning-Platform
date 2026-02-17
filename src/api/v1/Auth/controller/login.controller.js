import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Responses } from "../utils/response.js";
import { verifyTeacher } from "../utils/teacher.js";
import { verifyUser } from "../utils/user.js";
import { verifyCoachingCenter } from "../utils/coachingCenter.js";



const logInController = asyncHandler(async (req, res) => {
  
  const { email, password } = req.body;
  const { as = "student" } = req.query;

  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  if (as.trim() === "student") {
    const {rmPass, accessToken} = await verifyUser(email, password)
    Responses(res, rmPass, accessToken)
  }
  if (as.trim() === "teacher") {
    const {rmPass, accessToken} = await verifyTeacher(email, password)
    Responses(res, rmPass, accessToken)
  }
  if (as.trim() === "coaching") {
    const {rmPass, accessToken} = await verifyCoachingCenter(email, password)
    Responses(res, rmPass, accessToken)
  }
});

export { logInController };
