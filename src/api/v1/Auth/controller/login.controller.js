import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Responses } from "../utils/response.js";
import { verifyTeacher } from "../utils/teacher.js";
import { verifyUser } from "../utils/user.js";
import { verifyCoachingCenter } from "../utils/coachingCenter.js";



const logInController = asyncHandler(async (req, res) => {
  
  const { email, password } = req.body;


  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  const {user, accessToken} = await verifyUser(email, password)
  Responses(res, user, accessToken)

});

export { logInController };
